import { useEffect, useState } from 'react';
import {
  Container,
  Texto,
  Row,
  Pic,
  NameContainer,
  NameTxt,
  ViewHelper,
  MsgContainer,
  MsgTxt,
  XpView,
  Padding,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function UserCard() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        {/* <Padding> */}
        <Pic source={require('../../../tmp/images/EnWo7vrXMAAb5vO.png')} />
        <ViewHelper>
          <NameContainer>
            <NameTxt numberOfLines={1} ellipsizeMode="tail">
              4
            </NameTxt>
          </NameContainer>
          <MsgContainer>
            <MsgTxt>Nível 2</MsgTxt>
            <XpView>333 xp</XpView>
          </MsgContainer>
        </ViewHelper>
        {/* </Padding> */}
      </Row>
    </Container>
  );
}
