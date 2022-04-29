import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';
import { MessageCard } from '../../components/MessageCard';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Home() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const { signOut } = useAuth();

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await api.get('/message/1');

        setMessages(response.data.feedbacks);
        console.log(response.data.feedbacks);
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
            />
          ))}
        </ScrollView>
    </>
  );
}
