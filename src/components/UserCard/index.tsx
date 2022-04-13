import { useEffect, useState } from 'react';
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
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function UserCard({ user }) {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container id={user.id}>
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
