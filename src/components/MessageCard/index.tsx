import { MessageCardWrapper, ReceiverInfoWrapper, TagMessage } from "./styles";

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

export function MessageCard({
  receivers,
  emoji,
  tags,
  message,
}: MessageCardProps) {
  return (
    <MessageCardWrapper>
      <ReceiverInfoWrapper>
        {receivers.length > 1 ? (
          <TagMessage>
            foram gratificados por #{tags.map((tag) => tag.name).join(",")}
          </TagMessage>
        ) : (
          <TagMessage>foi gratificado por #{tags.join(",")}</TagMessage>
        )}
      </ReceiverInfoWrapper>
    </MessageCardWrapper>
  );
}
