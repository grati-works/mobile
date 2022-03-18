import { ReactNode } from 'react';
import { ButtonContainer, ButtonText } from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'link';
    text_align?: 'flex-start' | 'center' | 'flex-end';
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
    children: ReactNode;
}

export function Button({
    type = 'primary',
    text_align = 'center',
    disabled = false,
    loading = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <GestureHandlerRootView>
            <ButtonContainer type={type} align={text_align} {...props}>
                <ButtonText type={type}>{children}</ButtonText>
            </ButtonContainer>
        </GestureHandlerRootView>
    );
}
