import React, { useEffect, useState } from 'react';
import { Container, SearchInput, Margin, SearchIcon, SearchSection } from './styles';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

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
              placeholder="Luciano Monteirо"
              // value={search}
              multiline={false}
              // placeholderTextColor= {({ theme }) => theme.colors.text}
              placeholderTextColor="#4B5066"
            />
            <SearchIcon source={require('../../../tmp/images/EnWo7vrXMAAb5vO.png')} />
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
