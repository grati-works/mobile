import React, { useEffect, useState } from "react";
import { Container, SearchInput, SearchSection } from "./styles";
import { BorderlessButton, GestureHandlerRootView } from "react-native-gesture-handler";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchIcon from "../../assets/icons/search.svg";

import { UserCard } from "../../components/UserCard";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Search() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function updateSuggestions(query) {
    const organization_id = await AsyncStorage.getItem(
      "@Grati:selected_organization"
    );

    const suggestions = await api.get(`/search/${organization_id}?q=${query}`);
    setSuggestions(suggestions.data);
  }

  useEffect(() => {
    if (query.length === 0) {
      setSuggestions([]);
    } else if (query.length % 3 === 0) {
      updateSuggestions(query);
    }
  }, [query]);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <GestureHandlerRootView>
          <Container>
            <Header />

            <SearchSection>
              <SearchInput
                placeholder="Insira o termo para pesquisa"
                multiline={false}
                placeholderTextColor={({ theme }) => theme.colors.text}
                onChangeText={setQuery}
                value={query}
              />

              <BorderlessButton onPress={() => updateSuggestions(query)}>
                <SearchIcon width={30} height={30} />
              </BorderlessButton>
            </SearchSection>

            <FlatList
              data={suggestions}
              renderItem={(profile) => <UserCard profile={profile.item} />}
              keyExtractor={(profile) => profile.id}
            />
          </Container>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
