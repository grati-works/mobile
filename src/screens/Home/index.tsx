import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { MessageCard } from '../../components/MessageCard';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const { signOut } = useAuth();

  useEffect(() => {
    async function loadMessages() {
      try {
        const selectedOrganization = await AsyncStorage.getItem("@Grati:selected_organization");

        const response = await api.get(`/message/${selectedOrganization}`);

        console.log(response.data.feedbacks)

        setMessages(response.data.feedbacks);
      } catch (error) {
        console.log('API ERROR [MessageLoad]: ', error.response.data);
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
              emoji={message.emoji}
              receivers={message.receivers}
              tags={message.tags}
              message={message.message}
              sender={message.sender.user}
              created_at={message.created_at}
            />
          ))}
        </ScrollView>
    </>
  );
}
