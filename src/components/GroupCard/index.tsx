import React from "react";
import { GroupCardWrapper, GroupColor, GroupName } from "./styles";

interface GroupCardProps {
  id: string;
  name: string;
  color: string;
  selected?: boolean;
  onPress?: () => void;
}

export function GroupCard({ id, color, name, selected = false, ...props }: GroupCardProps) {
  return (
    <GroupCardWrapper {...props} selected={selected}>
      <GroupColor color={color} />
      <GroupName>{name}</GroupName>
    </GroupCardWrapper>
  );
}
