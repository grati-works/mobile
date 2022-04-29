import React, { useEffect, useState } from 'react';
import { SearchSection, SearchInput, HelperSection, UserTag } from './styles';
import { useNavigation } from '@react-navigation/native';

import UserIcon from '../../../assets/icons/username.svg';

export function UserInput() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <SearchSection>
      <UserIcon width={30} height={30} style={{ marginRight: 10, marginLeft: 1 }} />

      <HelperSection>
        <UserTag>Usuário</UserTag>
        <SearchInput
          placeholder="tulionogueira"
          multiline={false}
          textColor={({ theme }) => theme.colors.title}
        />
      </HelperSection>
    </SearchSection>
  );
}
