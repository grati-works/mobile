import { useEffect, useState } from "react";
import {
  Container,
  CardList,
  Header,
  Title,
  ModalTitle,
  GroupList,
} from "./styles";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { OrganizationCard } from "../../components/OrganizationCard";
import { Modal } from "../../components/Modal";
import { GroupCard } from "../../components/GroupCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function Organizations() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Kalunga",
      color: "#000000",
      image:
        "https://img.kalunga.com.br/hotsite/images/trabalhe-conosco/logo.png",
      groups: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          color: "#1BA",
          name: "Squad Turtle",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
          color: "#A00",
          name: "Administração",
        },
      ],
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      name: "Senai",
      color: "#CF4A32",
      image:
        "https://www.inova.unicamp.br/wp-content/uploads/2021/05/SENAI-SP.jpg",
      groups: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
          color: "#A00",
          name: "Administração",
        },
      ],
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
      name: "Microsoft",
      color: "#EEEEEE",
      image:
        "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/microsoft-cloud-app-security/microsoft-logo.png",
      groups: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
          color: "#121212",
          name: "Gaming Developers",
        },
      ],
    },
  ];

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    console.log("organizations")
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Organizações inscritas</Title>
          </Header>
          <GestureHandlerRootView>
            <CardList
              data={DATA}
              renderItem={({ item }) => (
                <OrganizationCard
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  color={item.color}
                  onPress={toggleModal}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </GestureHandlerRootView>
          <Modal isOpen={modalIsOpen} toggleFunction={toggleModal} padding={24}>
            <ModalTitle>Grupos inscritos na organização - Senai</ModalTitle>
            <GestureHandlerRootView>
              <GroupList
                data={DATA[0].groups}
                renderItem={({ item }) => (
                  <GroupCard key={item.id} name={item.name} color={item.color} />
                )}
              />
            </GestureHandlerRootView>
          </Modal>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
