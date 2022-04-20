import React, { useEffect, useState } from 'react';
import {
  Container,
  RankingNumber,
  Rank,
  Row,
  Pic,
  ViewHelper,
  NameContainer,
  NameTxt,
  InfoContainer,
  LvlTxt,
  Xp,
  XpNumber,
  XpView,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function RankingCard({ user }) {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container id={user.id}>
      <Rank>
        <RankingNumber numberOfLines={1} ellipsizeMode="clip">
          1
        </RankingNumber>
      </Rank>

      <Row>
        <Pic source={require('../../../tmp/images/EnWo7vrXMAAb5vO.png')} />
        <ViewHelper>
          <NameContainer>
            <NameTxt numberOfLines={1} ellipsizeMode="clip">
              Luciano Monteiro
            </NameTxt>
          </NameContainer>
          <InfoContainer>
            <LvlTxt>Nível 2</LvlTxt>
            <Xp>
              <XpNumber>3333</XpNumber>
              <XpView> xp</XpView>
            </Xp>
          </InfoContainer>
        </ViewHelper>
      </Row>
    </Container>
  );
}
