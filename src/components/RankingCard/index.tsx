import React, { useEffect } from "react";
import {
  CardWrapper,
  PositionWrapper,
  Position,
  ContentWrapper,
  ProfilePicture,
  UserInfo,
  Name,
  UserStatus,
  Level,
  Xp,
  XpNumber,
  XpView,
} from "./styles";

export function RankingCard({ data, position }) {
  return (
    <CardWrapper>
      <PositionWrapper>
        <Position>{position}</Position>
      </PositionWrapper>
      <ContentWrapper>
        <ProfilePicture source={{ uri: data.user.profile_picture || 'https://res.cloudinary.com/grati-works/image/upload/v1653055728/avatars/default_profile_picture_xjujhn.png' }} />
        <UserInfo>
          <Name>{data.user.name}</Name>
          <UserStatus>
            <Level>Nível {data.level}</Level>
            <Xp>
              <XpNumber>{data.points}</XpNumber>
              <XpView> xp</XpView>
            </Xp>
          </UserStatus>
        </UserInfo>
      </ContentWrapper>
    </CardWrapper>
  );
}
