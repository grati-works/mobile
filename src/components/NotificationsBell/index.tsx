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
      <NotificationIndicatorWrapper>
        <NotificationIndicatorText>
          {notifications.length}
        </NotificationIndicatorText>
      </NotificationIndicatorWrapper>
      <BellIcon width={36} height={36} />
    </NotificationsContainer>
  );
}
