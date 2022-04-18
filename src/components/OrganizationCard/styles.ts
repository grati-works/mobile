import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const OrganizationCardWrapper = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light.background_highlight};
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 32px;
`;

export const OrganizationImageWrapper = styled.View`
    width: 100%;
    height: ${RFValue(120)}px;
    background-color: ${({ color }) => color};
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OrganizationImage = styled.Image`
    width: 90%;
    height: 100%;
`;

export const OrganizationName = styled.Text`
    font-size: ${RFValue(18)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary_600};
    margin-top: 18px;
    color: ${({ theme }) => theme.colors.title};
`;