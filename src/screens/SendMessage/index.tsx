import {
  Container,
  ReceiversUsernamesWrapper,
  ReceiverUsername,
  ReceiverInput,
  MessageInfoWrapper,
  TagsWrapper,
  Tag,
  TagIconWrapper,
  TagIcon,
  TagName,
} from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export function SendMessage() {
  const theme = useTheme();

  return (
    <Container>
      <ReceiversUsernamesWrapper>
        <ReceiverUsername>@ericknathan</ReceiverUsername>
        <ReceiverInput placeholder="Insira o próximo usuário" />
      </ReceiversUsernamesWrapper>
      <MessageInfoWrapper>
        <TagsWrapper>
          <Tag>
            <TagIconWrapper>
              <TagIcon>
                <Icon
                  name="trophy"
                  size={RFValue(20)}
                  color={theme.colors.text}
                />
              </TagIcon>
            </TagIconWrapper>
            <TagName>Resiliência</TagName>
          </Tag>
        </TagsWrapper>
      </MessageInfoWrapper>
    </Container>
  );
}
