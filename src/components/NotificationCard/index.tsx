import React from 'react';
import dayjs from "dayjs";
import {
  Container,
  ProfilePicture,
  NotificationInfo,
  Title,
  ProfileName,
  Description
} from "./styles";

export function NotificationCard({ notificationData }) {
  return (
    <Container>
      <ProfilePicture />
      <NotificationInfo>
        <Title><ProfileName>{notificationData.user.name}</ProfileName> lhe enviou um feedback!</Title>
        <Description>Enviado em {dayjs(notificationData.created_at).subtract(3, 'hour').format('DD/MM/YYYY HH:mm').replace(' ', ' às ')}</Description>
      </NotificationInfo>
    </Container>
  );
}
