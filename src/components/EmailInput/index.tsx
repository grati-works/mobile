import React, { useEffect, useState } from 'react';
import { SearchSection, SearchInput, HelperSection, EmailTag } from './styles';
import { useNavigation } from '@react-navigation/native';

import EmailIcon from '../../assets/icons/user.svg';

export function EmailInput() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <SearchSection>
      <EmailIcon width={30} height={30} style={{ marginRight: 10, marginLeft: 10 }} />

      <HelperSection>
        <EmailTag>E-mail</EmailTag>
        <SearchInput
          placeholder=""
          multiline={false}
          textColor={({ theme }) => theme.colors.title}
        />
      </HelperSection>
    </SearchSection>
  );
}
