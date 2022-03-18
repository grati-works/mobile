import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GroupCardWrapper, GroupColor, GroupName } from "./styles";

interface GroupCardProps {
    name: string;
    color: string;
}

export function GroupCard({ color, name }: GroupCardProps) {
    return (
        <GestureHandlerRootView>
            <GroupCardWrapper>
                <GroupColor color={color}/>
                <GroupName>{name}</GroupName>
            </GroupCardWrapper>
        </GestureHandlerRootView>
    );
}