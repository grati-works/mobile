import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Linking } from 'react-native';
import theme from '../../styles/theme';

import ExternalLinkIcon from '../../assets/icons/external.svg';

import LinkedInLogo from '../../assets/icons/logo/linkedin.svg';
import DribbbleLogo from '../../assets/icons/logo/dribbble.svg';
import GitHubLogo from '../../assets/icons/logo/github.svg';

export function FabButton({ style = {}, gitHubUsername, dribbleUsername, LinkedInUsername }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  function toggleMenu() {
    const toValue = isOpen ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  }
  const gitStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180],
        }),
      },
    ],
  };
  const likeStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  };

  const cameraStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };

  const gitHubUrl = `https://github.com/${gitHubUsername}/`;
  const dribbbleUrl = `https://dribbble.com/${dribbleUsername}`;
  const linkedInUrl = `https://linkedin.com/in/${LinkedInUsername}/`;

  const openURL = async (url) => {
    const isSuported = await Linking.canOpenURL(url);
    if (isSuported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback
        onPress={() => {
          openURL(gitHubUrl);
        }}
      >
        <Animated.View style={[styles.button, styles.submenu, gitStyle]}>
          <GitHubLogo width={24} height={24} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          openURL(dribbbleUrl);
        }}
      >
        <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
          <DribbbleLogo width={24} height={24} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          openURL(linkedInUrl);
        }}
      >
        <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
          <LinkedInLogo width={24} height={24} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu]}>
          <ExternalLinkIcon width={35} height={35} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    right: 50,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.3,
  },
  menu: {
    elevation: 10,
    backgroundColor: theme.colors.primary,
  },
  submenu: {
    elevation: 10,
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#FFF',
  },
});
