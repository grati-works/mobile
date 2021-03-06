import React, { ReactNode } from 'react';
import { ButtonContainer, ButtonText } from './styles';

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
        <ButtonContainer type={type} align={text_align} {...props}>
            <ButtonText align={text_align} type={type}>{children}</ButtonText>
        </ButtonContainer>
    );
}
