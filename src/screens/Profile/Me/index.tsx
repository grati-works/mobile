import { useEffect, useState } from 'react';
import { Container } from './styles';

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ContentContainer } from '../../Login/styles';
import { ScrollView } from 'react-native-gesture-handler';

export function ProfileMe() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <ContentContainer></ContentContainer>
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
