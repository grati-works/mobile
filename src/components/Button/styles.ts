import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ theme, type }) =>
        type === 'primary' ? theme.colors.primary : theme.colors.light.background};
    border: ${({ theme, type }) =>
        type === 'secondary' ? theme.colors.primary : 'transparent'}
        1px solid;
    align-items: ${({ align }) => align || 'center'};
    margin-bottom: 8px;

    ${({ type }) =>
        type !== 'link' &&
        css`
        width: 100%;
        height: 53px;
        justify-content: center;
        border-radius: 5px;
    `}
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme, type }) =>
        type === 'link' ? theme.colors.primary : theme.colors.button_text};
    text-decoration: ${({ type }) => (type === 'link' ? 'underline' : 'none')};
    text-align: ${({ type }) => (type === 'link' ? 'left' : 'center')};;
`;
