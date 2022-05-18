import React, { useEffect, useState } from "react";
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
  ReceiverUsernameButton,
} from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useKeyboard } from "@react-native-community/hooks";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { Emoji, emojiIndex } from "emoji-mart-native";

import EmojiIcon from "../../assets/icons/emoji.svg";
import Image from "../../assets/icons/image.svg";
import Gif from "../../assets/icons/gif.svg";
import Document from "../../assets/icons/document.svg";
import Airplane from "../../assets/icons/airplane.svg";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { EmojiPicker } from "../../components/EmojiPicker";

export function SendMessage() {
  const theme = useTheme();
  const keyboard = useKeyboard();
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  const [username, setUsername] = useState("pedrothecatholic");
  const [usersList, setUsersList] = useState(["ericknathan"]);
  const [tags, setTags] = useState(["Resiliência"]);
  const [tag, setTag] = useState("Persistência");
  const [message, setMessage] = useState();
  const [emojiModalIsOpen, setEmojiModalIsOpen] = useState(false);
  const [emojiData, setEmojiData] = useState(null)

  function handleOpenEmojiModal() {
    setEmojiModalIsOpen(true)
  };

  function handleUpdateEmoji({ emoji, slug }) {
    console.log({ emoji, slug })
    setEmojiData({ slug, emoji })
  }

  function handleAddUser(event) {
    setUsersList([...usersList, event.nativeEvent.text]);
    setUsername("");
  }

  function handleRemoveUser(index) {
    const newUsersList = usersList.filter((user, i) => i !== index);
    setUsersList(newUsersList);
  }

  function handleAddTag(event) {
    setTags([...tags, event.nativeEvent.text]);
    setTag("");
  }

  function handleRemoveTag(index) {
    const newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  }

  useEffect(() => {
    setKeyboardIsVisible(keyboard.keyboardShown);
  }, [keyboard.keyboardShown]);

  return (
    <>
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container
            keyboardIsVisible={keyboardIsVisible}
            keyboardHeight={keyboard.keyboardHeight}
          >
            <ReceiversUsernamesWrapper>
              {usersList.map((user, index) => (
                <ReceiverUsernameButton onPress={() => handleRemoveUser(index)}>
                  <ReceiverUsername>@{user}</ReceiverUsername>
                </ReceiverUsernameButton>
              ))}
              <ReceiverInput
                placeholder="Insira o próximo usuário"
                value={username}
                onChange={setUsername}
                onSubmitEditing={handleAddUser}
                blurOnSubmit={false}
              />
            </ReceiversUsernamesWrapper>
            <MessageInfoWrapper>
              <TagsWrapper>
                {tags.map((tag, index) => (
                  <Tag onPress={() => handleRemoveTag(index)}>
                    <TagIconWrapper>
                      <TagIcon>
                        <Icon
                          name="trophy"
                          size={RFValue(20)}
                          color={theme.colors.text}
                        />
                      </TagIcon>
                    </TagIconWrapper>
                    <TagName>{tag}</TagName>
                  </Tag>
                ))}
                <TagInput
                  placeholder="Insira a próxima tag"
                  value={tag}
                  onChange={setTag}
                  onSubmitEditing={handleAddTag}
                  blurOnSubmit={false}
                />
              </TagsWrapper>
              <TextInput
                placeholder="Digite aqui sua mensagem..."
                value={message}
                onChangeText={setMessage}
                multiline={true}
              />
            </MessageInfoWrapper>
            <FooterWrapper keyboardIsVisible={keyboardIsVisible}>
              <AttachButton onPress={handleOpenEmojiModal} >
                {
                  emojiData == null ? 
                  <EmojiIcon /> :
                  <Emoji emoji={emojiIndex.search(emojiData.slug).filter(emoji => emoji.native == emojiData.emoji)[0].id} size={24} set="twitter" />
                }
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

      <EmojiPicker onPick={handleUpdateEmoji} isOpen={emojiModalIsOpen} onClose={() => setEmojiModalIsOpen(false)} />
    </>
  );
}
