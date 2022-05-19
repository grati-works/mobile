import React, { useEffect } from "react";
import { GroupCardWrapper, GroupColor, GroupName } from "./styles";

interface GroupCardProps {
  id: string;
  name: string;
  color: string;
  onPress?: () => void;
}

export function GroupCard({ id, color, name, ...props }: GroupCardProps) {
  useEffect(() => {
    console.log(name, id);
  }, []);
  return (
    <GroupCardWrapper {...props}>
      <GroupColor color={color} />
      <GroupName>{name}</GroupName>
    </GroupCardWrapper>
  );
}
