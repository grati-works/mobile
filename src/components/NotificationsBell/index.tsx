import React from "react";
import {
  NotificationIndicatorText,
  NotificationIndicatorWrapper,
  NotificationsContainer,
} from "./styles";
import BellIcon from "../../assets/icons/bell.svg";

export function NotificationsBell({ notifications, onPress }) {
  return (
    <NotificationsContainer onPress={onPress}>
      <BellIcon width={36} height={36} />
      <NotificationIndicatorWrapper>
        <NotificationIndicatorText>
          {notifications.length}
        </NotificationIndicatorText>
      </NotificationIndicatorWrapper>
    </NotificationsContainer>
  );
}
