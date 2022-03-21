import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ModalWrapper = styled.View`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const ModalContentWrapper = styled.View`
    height: 80%;
    width: 80%;
    background-color: ${({ theme }) => theme.colors.light.background};

    border-radius: 5px;

    padding: ${({ padding }) => padding || 0}px;
`;

export const ModalBackground = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.transparent_black};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;