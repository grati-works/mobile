import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { FlatList } from 'react-native-gesture-handler';

import { useNavigation } from "@react-navigation/native";
import { RankingCard } from "../../components/RankingCard";
import { Header } from "../../components/Header";

export function Ranking() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Container>
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
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  );
}
