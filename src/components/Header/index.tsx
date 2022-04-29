import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  NotificationsContainer,
  NotificationIndicator,
  ProfileContainer,
  ProfileName,
  ProfilePicture,
  ActionInfo,
  Text,
  Name,
  ActionButton,
  ButtonText,
} from "./styles";
import { Modalize } from "react-native-modalize";

import BellIcon from "../../assets/icons/bell.svg";
import { useTheme } from "styled-components";
import { NotificationCard } from "../NotificationCard";
import { Dimensions } from "react-native";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Header() {
  const [notifications, setNotifications] = useState([]);

  const modalizeProfileRef = useRef<Modalize>(null);
  const modalizeNotificationsRef = useRef<Modalize>(null);
  const theme = useTheme();
  const { user } = useAuth();

  const handleOpenProfileModal = () => {
    modalizeProfileRef.current?.open();
  };

  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("notification/list");
      const notifications = await response.data;

      setNotifications(notifications);
    }

    if (user) {
      loadNotifications();
    }
  }, []);

  return (
    <>
      <Container>
        <NotificationsContainer onPress={handleOpenNotificationsModal}>
          <NotificationIndicator>{notifications.length}</NotificationIndicator>
          <BellIcon width={36} height={36} />
        </NotificationsContainer>

        <ProfileContainer onPress={handleOpenProfileModal}>
          <ProfileName>{user.name}</ProfileName>
          <ProfilePicture source={{ uri: user.profile_picture }} />
        </ProfileContainer>
      </Container>

      <Modalize
        ref={modalizeNotificationsRef}
        snapPoint={Dimensions.get("window").height - 200}
        modalStyle={{
          backgroundColor: theme.colors.light.background,
        }}
        flatListProps={{
          data: notifications,
          renderItem: ({ item }) => (
            <NotificationCard key={item.id} notificationData={item} />
          ),
          keyExtractor: (item) => Math.floor(Math.random() * 100).toString(),
          showsVerticalScrollIndicator: false,
        }}
      />

      <Modalize
        ref={modalizeProfileRef}
        adjustToContentHeight
        withHandle={false}
      >
        <ActionInfo>
          <Text>
            Autenticado como: <Name>@ericknathan</Name>
          </Text>
        </ActionInfo>
        <ActionButton
          onPress={() => {
            console.log("AAA");
          }}
        >
          <ButtonText>Fazer logout</ButtonText>
        </ActionButton>
      </Modalize>
    </>
  );
}
