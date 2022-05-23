import React, { useEffect, useState } from 'react';
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
  LineTop
} from './styles';
import { Emoji } from 'emoji-mart-native';
import dayjs from 'dayjs';
import Remove from '../../assets/icons/remove_grati.svg';
import Reactions from '../../assets/icons/reactions.svg';
import ReactionsAdd from '../../assets/icons/reactions_added.svg';

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
                uri: message?.receivers[selectedUserIndex]?.user.profile_picture
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
                {message.tags.map((tag) => tag.name).join(', #')}
              </TagMessage>
              <LineTop />
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        ) : (
          <MessageUserInfoWrapper>
            <UserProfilePicture
              source={{
                uri: message?.receivers[selectedUserIndex]?.user.profile_picture
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
                foi gratificado por{' '}
                <Tag>#{message.tags.map((tag) => tag.name).join(', #')}</Tag>
              </TagMessage>
              <LineTop />
            </UserInfoWrapper>
          </MessageUserInfoWrapper>
        )}
        <EmojiView>
          <Emoji emoji={message.emoji} size={28} set='twitter' />
        </EmojiView>
      </ReceiverInfoWrapper>
      <MessageWrapper>{message.message}</MessageWrapper>
      <ActionsWrapper>
        <Timestamp>
          Há {dayjs(message.created_at).format('HH')}h por{' '}
          <Author>{message.sender.name}</Author>
        </Timestamp>
        <Remove
          style={{
            left: 346,
            bottom: 30
          }}
        />
      </ActionsWrapper>
      <Line />
      <ReactionsAdd />
      <Reactions style={{ left: 346, bottom: 22 }} />
    </MessageCardWrapper>
  );
}
