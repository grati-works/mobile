import React from 'react';
import { OrganizationCardWrapper, OrganizationImageWrapper, OrganizationName } from "./styles";

interface OrganizationCardProps {
    name: string;
    color: string;
    onPress: () => void;
    selected?: boolean;
}

export function OrganizationCard({ color, name, onPress, selected = false }: OrganizationCardProps) {
    return (
            <OrganizationCardWrapper onPress={onPress} selected={selected}>
                <OrganizationImageWrapper color={color} />
                <OrganizationName>{name}</OrganizationName>
            </OrganizationCardWrapper>
    );
}