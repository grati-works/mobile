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
  View
} from 'react-native';

import theme from '../../styles/theme';

export function IntroSlider() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
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
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}>
          <View style={{ width, height }}>
            <Image
              source={require('../../assets/images/logo.svg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>
                Est tincidunt et ac pretium id tortor molestie.
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../../assets/images/logo.svg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>
                Nibh neque tristique orci mollis in est.
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../../assets/images/logo.svg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>
                Elit commodo non egestas iaculis sem.
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../../assets/images/logo.svg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>
                Nunc nibh est egestas eu ornare vel.
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('../../assets/images/logo.svg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>
                Posuere lorem erat at interdum adipiscing.
              </Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor.
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
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    position: 'absolute',
    alignContent: 'center'
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(35),
    width: '100%'
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0
  },
  header: {
    fontFamily: theme.fonts.primary_500,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B5066'
  },
  paragraph: {
    fontFamily: theme.fonts.primary_400,
    fontSize: 17,
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
