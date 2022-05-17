import React, { useEffect, useState } from "react";
import {
  MessageCardWrapper,
  ReceiverInfoWrapper,
  TagMessage,
  MessageWrapper,
  ActionsWrapper,
  Timestamp,
  Author,
  UserInfoWrapper,
  UserName,
  UserResponsibility,
  UserProfilePicture,
  MessageUserInfoWrapper,
  Tag,
} from "./styles";
import { Emoji } from "emoji-mart-native";
import dayjs from "dayjs";

interface User {
  id: number;
  name: string;
  profile_picture?: string;
}

interface Tag {
  id: number;
  name: string;
}

interface MessageCardProps {
  receivers: {
    responsibility: string;
    user: User;
  }[];
  emoji: string;
  tags: Tag[];
  message: string;
  sender: User;
  created_at: Date;
}

export function MessageCard(message: MessageCardProps) {
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  useEffect(() => {
    if (message.receivers.length > 1) {
      setInterval(() => {
        setSelectedUserIndex(
          Math.floor(Math.random() * message.receivers.length)
        );
      }, 10000);
    }
  }, []);
  return (
    <MessageCardWrapper>
      <ReceiverInfoWrapper>
        {message.receivers.length > 1 ? (
          <MessageUserInfoWrapper>
            <UserProfilePicture
              source={{
                uri: message?.receivers[selectedUserIndex]?.user
                  .profile_picture,
              }}
              style={{ width: 50, height: 50 }}
            />
            <UserInfoWrapper>
              <UserName>
                {message?.receivers[selectedUserIndex]?.user.name}
              </UserName>
              <UserResponsibility>
                ({message?.receivers[selectedUserIndex]?.responsibility})
              </UserResponsibility>
              <TagMessage>
                foram gratificados por #
                {message.tags.map((tag) => tag.name).join(", #")}
              </TagMessage>
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        ) : (
          <MessageUserInfoWrapper>
            <UserProfilePicture
              source={{
                uri: message?.receivers[selectedUserIndex]?.user
                  .profile_picture,
              }}
              style={{ width: 50, height: 50 }}
            />
            <UserInfoWrapper>
              <UserName>
                {message?.receivers[selectedUserIndex]?.user.name}
              </UserName>
              <UserResponsibility>
                ({message?.receivers[selectedUserIndex]?.responsibility})
              </UserResponsibility>
              <TagMessage>
                foi gratificado por{" "}
                <Tag>#{message.tags.map((tag) => tag.name).join(", #")}</Tag>
              </TagMessage>
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        )}
        <Emoji emoji={message.emoji} size={24} set="twitter" />
      </ReceiverInfoWrapper>
      <MessageWrapper>{message.message}</MessageWrapper>
      <ActionsWrapper>
        <Timestamp>
          Há {dayjs(message.created_at).format("HH")}h por{" "}
          <Author>{message.sender.name}</Author>
        </Timestamp>
      </ActionsWrapper>
    </MessageCardWrapper>
  );
}
