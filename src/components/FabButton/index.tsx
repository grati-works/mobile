import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import theme from '../../styles/theme';

import ExternalLinkIcon from '../../assets/icons/external.svg';

import LinkedInLogo from '../../assets/icons/logo/linkedin.svg';
import DribbleLogo from '../../assets/icons/logo/dribble.svg';
import GitHubLogo from '../../assets/icons/logo/github.svg';
import { ThemeConsumer } from 'styled-components';

export default class FabButton extends React.Component {
  open: any;
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };

  render() {
    const gitStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -180],
          }),
        },
      ],
    };
    const likeStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120],
          }),
        },
      ],
    };

    const cameraStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={() => alert('heart')}>
          <Animated.View style={[styles.button, styles.submenu, gitStyle]}>
            <GitHubLogo width={24} height={24} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('heart')}>
          <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
            <DribbleLogo width={24} height={24} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('camera')}>
          <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
            <LinkedInLogo width={24} height={24} />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu]}>
            <ExternalLinkIcon width={35} height={35} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
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
    shadowOffset: {
      height: 10,
    },
  },

  menu: {
    backgroundColor: theme.colors.primary,
  },

  submenu: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#FFF',
  },
});
