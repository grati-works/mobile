import { Dimensions, Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LogoImage from '../../assets/images/logo.svg';
const { width, height } = Dimensions.get("window");

export const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const PageWrapper = styled.View`
  flex-direction: column;
  width: ${Platform.OS == 'ios' ? 375 : width}px;
  height: ${Platform.OS == 'ios' ? 10 : 560}px;

  align-items: center;
  justify-content: center;

  padding-horizontal: 35px;
  top: ${Platform.OS == 'ios' ? 240 : 26}px;
`;

export const PageTitleWrapper = styled.View`
  height: 280px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LogoImage)`
  bottom: ${Platform.OS == 'ios' ? 0 : 40}px;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  width: 320px;
  height: 178px;
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  line-height: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFPercentage(0)}px;
  margin-top: ${RFPercentage(18)}px;
`;

export const PageTitle1 = styled.Text`
  width: 320px;
  height: 178px;
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  line-height: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFPercentage(0)}px;
  margin-top: ${RFPercentage(30)}px;
`;

export const PageDescription = styled.Text`
  width: 210px;
  height: 40px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  top: ${Platform.OS == 'ios' ? 0 : 40}px;
`;

export const NextButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  top: ${Platform.OS == 'ios' ? 26 : 110}px;
  margin-bottom: ${Platform.OS == 'ios' ? -40 : -48}px;
`;
  
export const NextButtonWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const NextButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light.background};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20)}px;
  margin-top: 2px;
`;

export const PaginationWrapper = styled.View`
  position: absolute;
  bottom: 50px;
  left: 0%;
  right: 3.5%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PaginationDot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;
