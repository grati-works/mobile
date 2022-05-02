import React, { useEffect, useState } from 'react';
import { SearchSection, SearchInput, HelperSection, EmailTag } from './styles';
import { useNavigation } from '@react-navigation/native';

import EmailIcon from '../../../assets/icons/profile-input/email.svg';

export function EmailInput() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <SearchSection>
      <EmailIcon
        width={30}
        height={30}
        // color={({ theme }) => theme.colors.input.input_icon}
        style={{ marginRight: 10, marginLeft: 1 }}
      />

      <HelperSection>
        <EmailTag>E-mail</EmailTag>
        <SearchInput
          placeholder="tulio.nogueira@gmail.com"
          multiline={false}
          textColor={({ theme }) => theme.colors.title}
        />
      </HelperSection>
    </SearchSection>
  );
}
