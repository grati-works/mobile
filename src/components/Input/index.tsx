import { SvgProps } from 'react-native-svg';
import { IconContainer, InputContainer, StyledInput } from './styles';

interface InputProps {
    icon?: React.ReactElement<SvgProps>;
    placeholder: string;
}

export function Input({ icon, placeholder, ...props }: InputProps) {
    return (
        <InputContainer>
        {icon && <IconContainer>{icon}</IconContainer>}
        <StyledInput placeholder={placeholder} {...props} />
        </InputContainer>
    );
}
