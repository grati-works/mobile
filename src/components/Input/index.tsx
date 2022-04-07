import { SvgProps } from 'react-native-svg';
import { IconContainer, InputContainer, StyledInput } from './styles';

interface InputProps {
    icon?: React.ReactElement<SvgProps>;
    placeholder: string;
    value?: string;
    onChangeText?: React.Dispatch<(prevState: undefined) => undefined>;
    secureTextEntry?: boolean;
}

export function Input({ icon, placeholder, value, onChangeText, ...props }: InputProps) {
    return (
        <InputContainer>
        {icon && <IconContainer>{icon}</IconContainer>}
        <StyledInput placeholder={placeholder} value={value} onChangeText={onChangeText} {...props} />
        </InputContainer>
    );
}
