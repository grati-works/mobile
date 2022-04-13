import { useEffect, useState, useRef } from "react";
import {
  Container,
  NotificationsContainer,
  NotificationIndicator,
  ProfileContainer,
  ProfileName,
  ProfilePicture,
} from "./styles";
import { Modalize } from "react-native-modalize";

import { useNavigation } from "@react-navigation/native";
import BellIcon from "../../assets/icons/bell.svg";
import { useTheme } from "styled-components";
import { NotificationCard } from "../NotificationCard";
import { Dimensions } from 'react-native';

export function Header() {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const modalizeProfileRef = useRef<Modalize>(null);
  const modalizeNotificationsRef = useRef<Modalize>(null);
  const theme = useTheme();

  const notification = {
    user: {
      name: "Túlio Nogueira",
    },
    feedback_id: 1,
    created_at: new Date()
  };

  const notifications = [{ id: Math.random(), ...notification}, { id: Math.random(), ...notification}, { id: Math.random(), ...notification}];

  const handleOpenProfileModal = () => {
    modalizeProfileRef.current?.open();
  };

  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };


  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <NotificationsContainer onPress={handleOpenNotificationsModal}>
          <NotificationIndicator>3</NotificationIndicator>
          <BellIcon width={36} height={36} />
        </NotificationsContainer>

        <ProfileContainer onPress={handleOpenProfileModal}>
          <ProfileName>Túlio Nogueira</ProfileName>
          <ProfilePicture source={{ uri: "https://imgur.com/random.png" }} />
        </ProfileContainer>
      </Container>

      <Modalize ref={modalizeProfileRef} snapPoint={Dimensions.get('window').height - 200}>
        <ProfileName>Perfil</ProfileName>
      </Modalize>

      <Modalize ref={modalizeNotificationsRef} snapPoint={Dimensions.get('window').height - 200} modalStyle={{
        backgroundColor: theme.colors.light.background,
      }}
      flatListProps={{
        data: notifications,
        renderItem: ({ item }) => <NotificationCard key={item.id}  notificationData={item} />,
        keyExtractor: item => item.id,
        showsVerticalScrollIndicator: false,
      }}
      />
    </>
  );
}
