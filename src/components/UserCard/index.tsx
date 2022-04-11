import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Pic,
  NameContainer,
  NameTxt,
  ViewHelper,
  MsgContainer,
  MsgTxt,
  XpView,
  Xp,
  XpNumber,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function UserCard() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Pic source={require('../../../tmp/images/EnWo7vrXMAAb5vO.png')} />
        <ViewHelper>
          <NameContainer>
            <NameTxt numberOfLines={1} ellipsizeMode="tail">
              Luciano Monteiro
            </NameTxt>
          </NameContainer>
          <MsgContainer>
            <MsgTxt>Nível 2</MsgTxt>
            <Xp>
              <XpNumber>3333</XpNumber>
              <XpView> xp</XpView>
            </Xp>
          </MsgContainer>
        </ViewHelper>
      </Row>
    </Container>
  );
}
