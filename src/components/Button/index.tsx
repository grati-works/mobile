import { ReactChild } from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonProps {
    type: 'primary' | 'secondary' | 'link';
    text_align?: 'flex-start' | 'center' | 'flex-end';
    disabled: boolean;
    loading: boolean;
    onPress: () => void;
    children: ReactChild;
}

export function Button({ type = "primary", text_align = 'center', disabled = false, loading = false, onPress, children }: ButtonProps) {
    return (
        <ButtonContainer type={type}  align={text_align}>
            <ButtonText type={type}>
                {children}
            </ButtonText>
        </ButtonContainer>
    )
}