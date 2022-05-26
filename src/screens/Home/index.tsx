import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { MessageCard } from "../../components/MessageCard";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { EmojiPicker } from "../../components/EmojiPicker";

export function Home() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const { signOut } = useAuth();

  function handleDeleteMessage(message_id) {
    Alert.alert(
      "Exclusão de mensagem",
      "Você realmente deseja excluir essa mensagem?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
        },
        {
          text: "Excluir",
          onPress: () => {
            api.delete(`/message/${message_id}`).then(() => {
              setMessages((messages) => ({
                ...messages.filter((message) => message.id !== message_id),
              }));
            });
          },
          style: "destructive",
        },
      ]
    );
  }

  const [emojiModalIsOpen, setEmojiModalIsOpen] = useState(false);
  const [emojiData, setEmojiData] = useState(null);

  function handleOpenEmojiModal() {
    setEmojiModalIsOpen(true);
  }

  function handleUpdateEmoji({ emoji, slug }) {
    setEmojiData({ slug, emoji });
  }

  useEffect(() => {
    async function loadMessages() {
      try {
        const selectedOrganization = await AsyncStorage.getItem(
          "@Grati:organization_id"
        );

        const response = await api.get(`/message/${selectedOrganization}`);

        setMessages(response.data.feedbacks);
      } catch (error) {
        console.log("API ERROR [MessageLoad]: ", error.response.data);
      }
    }

    loadMessages();
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            message={{
              id: message.id,
              emoji: message.emoji,
              receivers: message.receivers,
              tags: message.tags,
              message: message.message,
              sender: message.sender.user,
              created_at: message.created_at,
            }}
            deleteFunction={handleDeleteMessage}
            openEmojiModal={() => setEmojiModalIsOpen(true)}
          />
        ))}
      </ScrollView>

      <EmojiPicker
        onPick={handleUpdateEmoji}
        isOpen={emojiModalIsOpen}
        onClose={() => setEmojiModalIsOpen(false)}
      />
    </>
  );
}
