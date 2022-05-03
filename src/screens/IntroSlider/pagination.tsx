import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';

import theme from '../../styles/theme';
import background from '../../assets/images/gggs_background.png';
import { Button } from '../../components/Button';
import { ButtonContainer } from '../../components/Button/styles';
import { ButtonText } from '../../components/Header/styles';

export function IntroSlider() {
  const [sliderState, setSliderState] = useState({ currentPage: 1 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={background} resizeMode='cover' style={styles.image}>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={0.2}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event: any) => {
              setSliderPage(event);
            }}>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header1}>
                  Olá!
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header2}>
                  Seja bem-vindo à Grati!
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header3}>
                  A Grati é sua rede social corporativa favorita!
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header3}>
                  No qual você pode gratificar e ser gratificado
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.headerFinale}>
                  Mas, por enquanto, é só isso que precisa saber...
                </Text>
                <ButtonContainer style={styles.button}>
                  <ButtonText style={styles.buttonText}>&gt;</ButtonText>
                </ButtonContainer>
              </View>
            </View>
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(5).keys()).map((key, index) => (
              <View
                style={[
                  styles.paginationDots,
                  { opacity: pageIndex === index ? 1 : 0.4 }
                ]}
                key={index}
              />
            ))}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    position: 'absolute',
    alignContent: 'center'
  },
  button: {
    width: 50,
    height: 50,
    top: 100,
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F6F7F8',
    borderColor: '#E5E5E5'  
  },
  buttonText: {
    bottom: 14,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#787c8c'
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    left: 152,
    top: 50,
    height: PixelRatio.getPixelSizeForLayoutSize(28),
    width: PixelRatio.getPixelSizeForLayoutSize(30)
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 150,
  },
  header: {
    width: 300,
    height: 120,
    left: 0,
    top: 10,
    fontFamily: theme.fonts.primary_500,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 78,
    textAlign: 'center',
    lineHeight: 40,
    color: '#4B5066'
  },
  header1: {
    width: 300,
    height: 120,
    left: 6,
    top: 0,
    fontFamily: theme.fonts.primary_500,
    fontSize: 54,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 70,
    color: '#4B5066'
  },
  header2: {
    width: 300,
    height: 120,
    left: 0,
    top: 0,
    fontFamily: theme.fonts.primary_500,
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 48,
    color: '#4B5066'
  },
  header3: {
    width: 400,
    height: 120,
    left: 0,
    top: 0,
    fontFamily: theme.fonts.primary_500,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 40,
    color: '#4B5066'
  },
  headerFinale: {
    width: 400,
    height: 120,
    left: 0,
    top: 0,
    fontFamily: theme.fonts.primary_500,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    lineHeight: 40,
    color: '#4B5066'
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 62,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  paginationDots: {
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
    backgroundColor: '#6874E8',
    marginLeft: 10
  }
});
