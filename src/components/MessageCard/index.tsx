import React, { useEffect } from 'react';
import {
  MessageCardWrapper,
  ReceiverInfoWrapper,
  TagMessage,
  MessageWrapper,
  ActionsWrapper,
  Timestamp,
  Author
} from './styles';
import { Emoji } from 'emoji-mart-native';
import { ScrollView } from 'react-native-gesture-handler';
import dayjs from 'dayjs';

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
  receivers: User[];
  emoji: string;
  tags: Tag[];
  message: string;
  sender: User;
  created_at: Date;
}

export function MessageCard(message: MessageCardProps) {
  useEffect(() => {
    // console.log(message);
  }, []);
  return (
      <MessageCardWrapper>
        <ReceiverInfoWrapper>
          {message.receivers.length > 1 ? (
            <TagMessage>
              foram gratificados por #
              {message.tags.map((tag) => tag.name).join(', #')}
            </TagMessage>
          ) : (
            <TagMessage>
              {message?.receivers[0]?.name} foi gratificado por #{message.tags.map((tag) => tag.name).join(', #')}
              {message.tags.map((tag) => tag.name).join(', #')}
            </TagMessage>
          )}
          <Emoji emoji={message.emoji} size={24} set='twitter' />
        </ReceiverInfoWrapper>
        <MessageWrapper>{message.message}</MessageWrapper>
        <ActionsWrapper>
          <Timestamp>
            Há {dayjs(message.created_at).format('HH')}h por <Author>{message.sender.name}</Author>
          </Timestamp>
        </ActionsWrapper>
      </MessageCardWrapper>
  );
}
