import { useEffect } from "react";
import { MessageCardWrapper, ReceiverInfoWrapper, TagMessage, MessageWrapper, ActionsWrapper, Timestamp, Author } from "./styles";
import { Emoji } from 'emoji-mart-native';

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
}

export function MessageCard(message: MessageCardProps) {
  useEffect(() => {
    console.log(message)
  }, [])
  return (
    <MessageCardWrapper>
      <ReceiverInfoWrapper>
        {message.receivers.length > 1 ? (
          <TagMessage>
            foram gratificados por #{message.tags.map((tag) => tag.name).join(", #")}
          </TagMessage>
        ) : (
          <TagMessage>foi gratificado por #{message.tags.map((tag) => tag.name).join(", #")}</TagMessage>
        )}
        <Emoji emoji={message.emoji} size={24}  set='twitter' />
      </ReceiverInfoWrapper>
      <MessageWrapper>
          {message.message}
          <ActionsWrapper>
            <Timestamp>Há 4h por <Author>{message.sender.name}</Author></Timestamp>
            
          </ActionsWrapper>
      </MessageWrapper>
    </MessageCardWrapper>
  );
}
