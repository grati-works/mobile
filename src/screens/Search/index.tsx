import React, { useEffect, useState } from 'react';
import { Container, SearchInput, Margin } from './styles';

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
          <SearchInput
            placeholder="Luciano Monteirо"
            // value={message}
            // onChangeText={setMessage}
            multiline={false}
            placeholderTextColor={({ theme }) => theme.colors.primary}
          />
          <Margin/>
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
