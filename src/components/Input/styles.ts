import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  width: 100%;
  height: ${({ size }) => size || 53}px;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: ${({ size }) => size || 53}px;
  border-right-width: 2px;
  border-right-color: #f4f5f6;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  padding: 0px 10px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
