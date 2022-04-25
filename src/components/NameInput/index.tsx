import React, { useEffect, useState } from 'react';
import { SearchSection, SearchInput, HelperSection, NameTag } from './styles';
import { useNavigation } from '@react-navigation/native';

import UserIcon from '../../assets/icons/user.svg';

export function NameInput() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <SearchSection>
      <UserIcon width={30} height={30} style={{ marginRight: 10, marginLeft: 10 }} />

      <HelperSection>
        <NameTag>Nome</NameTag>
        <SearchInput
          placeholder="Luciano Monteiro"
          multiline={false}
         textColor={({ theme }) => theme.colors.title}
        />
      </HelperSection>
    </SearchSection>
  );
}
