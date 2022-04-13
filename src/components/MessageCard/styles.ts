import styled from 'styled-components/native';

export const MessageCardWrapper = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light.background_highlight};
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 4px;
    margin-top: 0px;
`;

export const ReceiverInfoWrapper = styled.View``
export const TagMessage = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
`

export const MessageWrapper = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    margin-top: 17px;
`;

export const ActionsWrapper = styled.View``
export const Timestamp = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    margin-top: 16px;
    margin-bottom: 7px
`
export const Author = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
`
