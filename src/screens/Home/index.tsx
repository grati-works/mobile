import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";


export function Home() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState()

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get("/message/1/1");

      setMessages(response.data);
      console.log(messages)
    }

    loadMessages();
  }, [])

  return (
    <Text>Teste</Text>
  );
}
