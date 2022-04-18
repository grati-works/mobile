import React, { useEffect, useState } from 'react';
import { Container, SearchInput, SearchSection } from './styles';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';

import { useNavigation } from '@react-navigation/native';
import { UserCard } from '../../components/UserCard';
import { Header } from '../../components/Header';

export function Search() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header />

          <SearchSection>
            <SearchInput
              placeholder="Luciano Monteiro"
              multiline={false}
              placeholderTextColor={({ theme }) => theme.colors.text}
            />
            <SearchIcon width={30} height={30} />
          </SearchSection>

          <FlatList
            data={[
              {
                id: 1,
              },
              {
                id: 2,
              },
            ]}
            renderItem={(user) => <UserCard user={user} />}
            keyExtractor={(user) => user.id}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
