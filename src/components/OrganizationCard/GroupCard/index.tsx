import React from 'react';
import { GroupCardWrapper, GroupColor, GroupName } from "./styles";

interface GroupCardProps {
    name: string;
    color: string;
}

export function GroupCard({ color, name }: GroupCardProps) {
    return (
        <GroupCardWrapper>
            <GroupColor color={color}/>
            <GroupName>{name}</GroupName>
        </GroupCardWrapper>
    );
}