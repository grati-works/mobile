import { useEffect, useState } from "react";
import { Container } from "./styles";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";

export function Ranking() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
