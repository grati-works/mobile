import React, { useEffect } from 'react';
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
} from './styles';

export function RankingCard({ data }) {
    useEffect(() => {
        console.log({ data });
    }, [])
  return (
    <CardWrapper>
      <PositionWrapper>
        <Position>1</Position>
      </PositionWrapper>
      <ContentWrapper>
          <ProfilePicture source={{ uri: data.user.profile_picture }} />
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
