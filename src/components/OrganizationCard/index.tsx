import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OrganizationCardWrapper, OrganizationImageWrapper, OrganizationImage, OrganizationName } from "./styles";

interface OrganizationCardProps {
    name: string;
    image: string;
    color: string;
    onPress: () => void;
}

export function OrganizationCard({ color, image, name, onPress }: OrganizationCardProps) {
    return (
        <GestureHandlerRootView>
            <OrganizationCardWrapper onPress={onPress}>
                <OrganizationImageWrapper color={color}>
                    <OrganizationImage source={{
                        uri: image
                    }} resizeMode="contain" />
                </OrganizationImageWrapper>
                <OrganizationName>{name}</OrganizationName>
            </OrganizationCardWrapper>
        </GestureHandlerRootView>
    );
}