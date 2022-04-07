import { OrganizationCardWrapper, OrganizationImageWrapper, OrganizationImage, OrganizationName } from "./styles";

interface OrganizationCardProps {
    name: string;
    color: string;
    onPress: () => void;
}

export function OrganizationCard({ color, name, onPress }: OrganizationCardProps) {
    return (
            <OrganizationCardWrapper onPress={onPress}>
                <OrganizationImageWrapper color={color} />
                <OrganizationName>{name}</OrganizationName>
            </OrganizationCardWrapper>
    );
}