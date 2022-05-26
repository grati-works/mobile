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
  EmojiView,
  Line,
  LineTop,
  ActionButtonWrapper,
  FooterWrapper,
  ReactionsList,
} from "./styles";
import { Emoji } from "emoji-mart-native";
import dayjs from "dayjs";
import Remove from "../../assets/icons/remove_grati.svg";
import Reactions from "../../assets/icons/reactions.svg";
import ReactionsAdd from "../../assets/icons/reactions_added.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  id: number;
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

interface Props {
  message: MessageCardProps;
  deleteFunction: (id: number) => void;
  openEmojiModal: () => void;
}

export function MessageCard({
  message,
  deleteFunction,
  openEmojiModal,
}: Props) {
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const { user } = useAuth();

  const navigation = useNavigation();

  async function handleGoToProfile(profile_id: number) {
    const organization_id = await AsyncStorage.getItem(
      "@Grati:organization_id"
    );

    const profile = await api.get(`/profile/${organization_id}/${profile_id}`);
    console.log(profile.data);
    navigation.navigate("Profile", { profile: profile.data });
  }

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

              {message.receivers[selectedUserIndex].responsibility !== null && (
                <UserResponsibility>
                  ({message?.receivers[selectedUserIndex]?.responsibility})
                </UserResponsibility>
              )}

              <TagMessage>
                foram gratificados por #
                {message.tags.map((tag) => tag.name).join(", #")}
              </TagMessage>
              <LineTop />
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        ) : (
          <MessageUserInfoWrapper>
            <UserProfilePicture
              source={{
                uri:
                  message.receivers[selectedUserIndex].user.profile_picture ||
                  "https://res.cloudinary.com/grati-works/image/upload/v1653055728/avatars/default_profile_picture_xjujhn.png",
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
              <LineTop />
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        )}
        <EmojiView>
          <Emoji emoji={message.emoji} size={28} set="twitter" />
        </EmojiView>
      </ReceiverInfoWrapper>
      <MessageWrapper>{message.message}</MessageWrapper>
      <GestureHandlerRootView>
        <ActionsWrapper>
          <Timestamp>
            Há {dayjs(message.created_at).format("HH")}h por{" "}
            <Author onPress={() => handleGoToProfile(message.sender.id)}>
              {message.sender.name}
            </Author>
          </Timestamp>
          {message.sender.id === Number(user.id) && (
            <ActionButtonWrapper onPress={() => deleteFunction(message.id)}>
              <Remove />
            </ActionButtonWrapper>
          )}
        </ActionsWrapper>
        <Line />
        <FooterWrapper>
          <ReactionsAdd />
          <ActionButtonWrapper onPress={openEmojiModal}>
            <Reactions />
          </ActionButtonWrapper>
        </FooterWrapper>
      </GestureHandlerRootView>
    </MessageCardWrapper>
  );
}
