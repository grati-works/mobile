import {
  Container,
  ReceiversUsernamesWrapper,
  ReceiverUsername,
  ReceiverInput,
  TagInput,
  MessageInfoWrapper,
  TagsWrapper,
  Tag,
  TagIconWrapper,
  TagIcon,
  TagName,
  TextInput,
  FooterWrapper,
  AttachButton,
  SendButton,
} from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useKeyboard } from "@react-native-community/hooks";
import { useTheme } from "styled-components";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { useEffect, useState } from "react";

import Emoji from "../../assets/icons/emoji.svg";
import Image from "../../assets/icons/image.svg";
import Gif from "../../assets/icons/gif.svg";
import Document from "../../assets/icons/document.svg";
import Airplane from "../../assets/icons/airplane.svg";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function SendMessage() {
  const theme = useTheme();
  const [message, setMessage] = useState();
  const keyboard = useKeyboard();
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  useEffect(() => {
    setKeyboardIsVisible(keyboard.keyboardShown);
  } , [keyboard.keyboardShown]);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container keyboardIsVisible={keyboardIsVisible} keyboardHeight={keyboard.keyboardHeight}>
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
            <TagInput placeholder="Insira a próxima tag" />
            </TagsWrapper>
            <TextInput
              placeholder="Digite aqui sua mensagem..."
              value={message}
              onChangeText={setMessage}
              multiline={true}
            />
          </MessageInfoWrapper>
          <FooterWrapper>
            <AttachButton>
              <Emoji />
            </AttachButton>
            <AttachButton>
              <Image />
            </AttachButton>
            <AttachButton>
              <Gif />
            </AttachButton>
            <AttachButton>
              <Document />
            </AttachButton>
            <SendButton>
              <Airplane />
            </SendButton>
          </FooterWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
