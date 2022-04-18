import { useEffect, useState } from 'react';
import { Container } from './styles';

import { KeyboardAvoidingView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RankingCard } from '../../components/RankingCard';
import { Header } from '../../components/Header';

export function Ranking() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container>
      <Header />

      <FlatList
        data={[
          {
            id: 1,
          },
          {
            id: 2,
          },
        ]}
        renderItem={(user) => <RankingCard user={user} />}
        keyExtractor={(user) => user.id}
      />
    </Container>
  );
}
