import React from "react";
import { SvgProps } from "react-native-svg";
import { IconContainer, InputContainer, StyledInput } from "./styles";

interface InputProps {
  icon?: React.ReactElement<SvgProps>;
  placeholder: string;
  value?: string;
  onChangeText?: React.Dispatch<(prevState: undefined) => undefined>;
  secureTextEntry?: boolean;
  size?: number;
}

export function Input({
  icon,
  placeholder,
  value,
  onChangeText,
  size = 53,
  secureTextEntry,
  ...props
}: InputProps) {
  return (
    <InputContainer size={size}>
      {icon && <IconContainer size={size}>{icon}</IconContainer>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </InputContainer>
  );
}
