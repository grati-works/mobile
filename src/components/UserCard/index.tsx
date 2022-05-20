import React from "react";
import {
  Container,
  Row,
  Pic,
  NameContainer,
  NameTxt,
  ViewHelper,
  InfoContainer,
  LvlTxt,
  XpView,
  Xp,
  XpNumber,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

export function UserCard({ profile }) {
  const navigation = useNavigation();

  function handleGoToProfile() {
    navigation.navigate("Profile", { profile });
  }

  return (
    <Container id={profile.id} onPress={handleGoToProfile}>
      <Row>
        <Pic source={{ uri: profile.user.profile_picture }} />
        <ViewHelper>
          <NameContainer>
            <NameTxt numberOfLines={1} ellipsizeMode="clip">
              {profile.user.name}
            </NameTxt>
          </NameContainer>
          <InfoContainer>
            <LvlTxt>{profile.responsibility}</LvlTxt>
            <Xp>
              <XpNumber>{profile.points}</XpNumber>
              <XpView> xp</XpView>
            </Xp>
          </InfoContainer>
        </ViewHelper>
      </Row>
    </Container>
  );
}
