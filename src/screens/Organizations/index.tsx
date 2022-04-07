import { useEffect, useRef, useState } from "react";
import {
  Container,
  CardList,
  Header,
  Title,
  ModalTitle,
} from "./styles";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';

import { OrganizationCard } from "../../components/OrganizationCard";
import { GroupCard } from "../../components/GroupCard";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from 'react-native-modalize';

export function Organizations() {
  const navigation = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const theme = useTheme();

  const modalizeRef = useRef<Modalize>(null);

  async function toggleModal(id: number) {
    setSelectedOrganization(id);
    AsyncStorage.setItem("@Grati:organization_id", id.toString());
    // setModalIsOpen(!modalIsOpen);
    modalizeRef.current?.open();
  }

  function enterGroup(id: number) {
    navigation.navigate("Home", {
      organization_id: selectedOrganization,
      group_id: id,
    })
    AsyncStorage.setItem("@Grati:group_id", id.toString());
    setSelectedGroup(id);
  }

  useEffect(() => {
    async function loadSelectedInfo() {
      try {
        const organization_id = await AsyncStorage.getItem("@Grati:organization_id");
        const group_id = await AsyncStorage.getItem("@Grati:group_id");
  
        if(organization_id) setSelectedOrganization(organization_id);
        if(group_id) setSelectedGroup(group_id);
      } catch (error) {
        console.debug('Não foi possível recarregar organização selecionada')
      }
    }

    async function loadOrganizations() {
      try {
        const organizations = await api.get('user/organizations');

        setOrganizations(organizations.data);
        console.log(organizations.data)
      } catch (error) {
        console.log(error);
        console.debug('Não foi possível carregar as organizações de usuário');
      }
    }

    loadSelectedInfo();
    loadOrganizations();
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Organizações inscritas</Title>
          </Header>
            <CardList
              data={organizations}
              contentContainerStyle={{paddingBottom:100}} 
              renderItem={({ item }) => (
                <OrganizationCard
                  key={item.id}
                  name={item.name}
                  color={item.color}
                  onPress={() => toggleModal(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
              panGestureComponentEnabled={true}
            />
            <Modalize
              ref={modalizeRef}
              snapPoint={700}
              HeaderComponent={
                <ModalTitle>Grupos inscritos na organização - {organizations.find(organization => organization.id === selectedOrganization)?.name}</ModalTitle>
              }
              childrenStyle={{padding: 20}}
              modalStyle={{
                padding: 40,
                backgroundColor: theme.colors.light.background,
              }}
            >
                  {
                    organizations.find(organization => organization.id === selectedOrganization)?.groups.map(group => (
                      <GroupCard
                        key={group.id}
                        name={group.name}
                        color={group.color}
                        onPress={() => enterGroup(group.id)}
                        />
                    ))
                  }
            </Modalize>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
