import React from 'react';
import { NotificationIndicator, NotificationsContainer } from "./styles";
import BellIcon from "../../assets/icons/bell.svg";

export function NotificationsBell({ notifications, onPress }) {
  return (
    <NotificationsContainer onPress={onPress}>
      <NotificationIndicator>{notifications.length}</NotificationIndicator>
      <BellIcon width={36} height={36} />
    </NotificationsContainer>
  );
}
