import { GroupCardWrapper, GroupColor, GroupName } from "./styles";

interface GroupCardProps {
    name: string;
    color: string;
    onPress?: () => void;
}

export function GroupCard({ color, name, ...props }: GroupCardProps) {
    return (
            <GroupCardWrapper {...props}>
                <GroupColor color={color}/>
                <GroupName>{name}</GroupName>
            </GroupCardWrapper>
    );
}