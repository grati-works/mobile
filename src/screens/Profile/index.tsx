import React, { useEffect } from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { FabButton } from '../../components/FabButton';

import {
  AboutMe,
  Container,
  SectionTitle,
  NormalText,
  ProfilePicture,
  ProfilePictureContainer,
  SectionWrapper,
  SubName,
  UserName,
  UserResponsibiliy,
  XpNumber,
  XpText,
  XpView,
  ScrollView,
  SocialMediaWidget,
} from './styles';
import ExternalLinkIcon from '../../assets/icons/external.svg';

export function UserProfile({ route, navigation }) {
  const { profile } = route.params;
  useEffect(() => {
    console.log(route.params);
  }, []);

  animation = new Animated.Value(0);

  toggleMenu = () => {}

  const { width } = useWindowDimensions();
  const tagsStyles = {
    body: {
      color: theme.colors.text,
      fontFamily: theme.fonts.primary_400,
      fontSize: RFValue(14),
      width: width * 0.88,
    },
  };

  return (
    <>
      <ScrollView>
        <Container>
          <ProfilePictureContainer>
            <ProfilePicture source={{ uri: profile.user.profile_picture }} />
          </ProfilePictureContainer>

          <UserName>{profile.user.name}</UserName>

          <UserResponsibiliy>{profile.responsibility}</UserResponsibiliy>

          <XpView>
            <XpNumber>{profile.points}</XpNumber>
            <XpText>xp</XpText>
          </XpView>

          <AboutMe>
            <SectionTitle>Sobre mim</SectionTitle>
            <NormalText>
              <RenderHTML source={{ html: profile.description }} tagsStyles={tagsStyles} />
            </NormalText>
          </AboutMe>

          <SectionWrapper>
            <SectionTitle>Skills</SectionTitle>
            <NormalText>
              <RenderHTML
                source={{ html: profile.skills }}
                tagsStyles={tagsStyles}
                contentWidth={width * 0.88}
              />
            </NormalText>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitle>Formação</SectionTitle>
            <NormalText>
              <RenderHTML
                source={{ html: profile.graduations }}
                tagsStyles={tagsStyles}
                contentWidth={width * 0.88}
              />
            </NormalText>
          </SectionWrapper>
        </Container>
      </ScrollView>
      <SocialMediaWidget>
        <FabButton></FabButton>
        <ExternalLinkIcon />
      </SocialMediaWidget>
    </>
  );
}
