import styled from 'styled-components/native';

export const InputContainer = styled.View`
    width: 100%;
    height: 53px;
    background-color: ${({ theme }) => theme.colors.light.background_highlight};
    flex-direction: row;
    margin-bottom: 8px;
`;

export const IconContainer = styled.View`
    height: 100%;
    width: 53px;
    border-right-width: 2px;
    border-right-color: #F4F5F6;
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.TextInput`
    flex: 1;
    padding: 0px 10px;
`;