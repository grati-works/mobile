import React, { useEffect, useState } from 'react';
import { SearchSection, SearchInput, HelperSection, PasswordTag } from './styles';
import { useNavigation } from '@react-navigation/native';

import Password from '../../../assets/icons/profile-input/password.svg';

export function PasswordInput() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <SearchSection>
      <Password width={30} height={30} style={{ marginRight: 10, marginLeft: 1 }} />
      <HelperSection>
        <PasswordTag>Senha</PasswordTag>
        <SearchInput
          placeholder="..."
          multiline={false}
          textColor={({ theme }) => theme.colors.title}
        />
      </HelperSection>
    </SearchSection>
  );
}
