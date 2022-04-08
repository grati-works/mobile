import { useEffect, useState } from "react";
import { Container } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function UserCard() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container></Container>
  );
}
