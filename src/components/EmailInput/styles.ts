import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const SearchSection = styled.View`
flexDirection: row
width: 90%
borderColor: #D3D0D7
borderRadius: 5px
borderWidth: 1px
alignItems: center
padding: 15px
marginBottom: 20px
`;

export const HelperSection = styled.View`
flex: 1
flexDirection: column
paddingLeft: 10px
`;

export const SearchInput = styled.TextInput`
width: 100%
fontFamily: ${({ theme }) => theme.fonts.primary_500}
font-size: ${RFValue(20)}px
paddingRight: 10px
`;

export const EmailTag = styled.Text`
  color: ${({ theme }) => theme.colors.placeholder};
`;
