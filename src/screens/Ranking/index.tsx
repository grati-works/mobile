import React, { useEffect, useState } from "react";
import { Container, Separator, EmptyText } from "./styles";

import { FlatList } from "react-native-gesture-handler";

import { RankingCard } from "../../components/RankingCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadRanking() {
      const lastOrganization = await AsyncStorage.getItem(
        "@Grati:organization_id"
      );

      if (lastOrganization) {
        const nowDate = dayjs().format("YYYY-MM-DD");
        const threeMonthsAgoDate = dayjs()
          .subtract(3, "month")
          .format("YYYY-MM-DD");

        const response = await api.get(
          `organization/${lastOrganization}/ranking?page=${
            currentPage - 1
          }&start_date=${threeMonthsAgoDate}&end_date=${nowDate}`
        );

        setRanking(response.data.ranking);
        setTotalPages(response.data.total_pages);
      } else {
        setRanking([]);
        setTotalPages(1);
      }
    }

    loadRanking();
  }, []);

  return (
    <>
      <Container>
        <Header />

        {ranking.length === 0 ? (
          <EmptyText>Nenhuma organização selecionada!</EmptyText>
        ) : (
          <FlatList
            data={ranking}
            renderItem={({ item, index }) => (
              <RankingCard data={item} position={index+1} />
            )}
            keyExtractor={(data) => data.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Separator />}
          />
        )}
      </Container>
    </>
  );
}
