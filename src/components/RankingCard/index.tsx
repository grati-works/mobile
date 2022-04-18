import { useEffect, useState } from 'react';
import { Container, Text, Rank } from './styles';
import { useNavigation } from '@react-navigation/native';

import { UserCard } from '../../components/UserCard';

export function RankingCard({ user }) {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <Container id={user.id}>
      <Rank>
        <Text numberOfLines={1} ellipsizeMode="clip">1</Text>
      </Rank>

      <UserCard user={user} />
    </Container>
  );
}
