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
                source={require('../../assets/images/logo.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>
                  Est tincidunt et ac pretium id tortor molestie.
                </Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor.
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>
                  Nibh neque tristique orci mollis in est.
                </Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor.
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>
                  Elit commodo non egestas iaculis sem.
                </Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor.
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>
                  Nunc nibh est egestas eu ornare vel.
                </Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor.
                </Text>
              </View>
            </View>
            <View style={{ width, height }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.imageStyle}
              />
              <View style={styles.wrapper}>
                <Text style={styles.header}>
                  Posuere lorem erat at interdum adipiscing.
                </Text>
                <Text style={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tortor.
                </Text>
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
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    left: 150,
    top: 50,
    height: PixelRatio.getPixelSizeForLayoutSize(35),
    width: '24%'
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 140,
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
  paragraph: {
    width: 254,
    height:102,
    left: 0,
    top: 0,
    fontFamily: theme.fonts.primary_400,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 25,
    color: '#6874E8'
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
