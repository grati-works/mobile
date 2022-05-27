import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import background from '../../assets/images/gggs_background.png';

import { useNavigation } from '@react-navigation/native';

import {
  BackgroundWrapper,
  Logo,
  NextButtonContainer,
  NextButtonText,
  NextButtonWrapper,
  PageDescription,
  PageTitle,
  PageTitle1,
  PageTitleWrapper,
  PageWrapper,
  PaginationDot,
  PaginationWrapper
} from './styles';

export function IntroSlider() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get('window');

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

  const navigation = useNavigation();

  async function goHome() {
    navigation.navigate('Login');
  }

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar style='dark' backgroundColor='transparent' />
      <SafeAreaView style={{ flex: 1 }}>
        <BackgroundWrapper source={background} resizeMode='cover'>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={0.2}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event: any) => {
              setSliderPage(event);
            }}>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle1>Olá usuário!</PageTitle1>
              </PageTitleWrapper>
              <PageDescription></PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Seja bem-vindo(a) à Grati</PageTitle>
              </PageTitleWrapper>
              <PageDescription>
                A plataforma mais intuitiva que vai encontrar
              </PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Sua nova rede social corporativa</PageTitle>
              </PageTitleWrapper>
              <PageDescription>
                Àquela que você não vai querer ficar sem...
              </PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Podendo gratificar e ser gratificado</PageTitle>
              </PageTitleWrapper>
              <PageDescription>
                E sempre manter contato com seus colegas
              </PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Ainda não possui conta?</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Junte-se a nós!</PageDescription>
              <NextButtonContainer>
                <NextButtonWrapper onPress={goHome}>
                  <NextButtonText>&gt;</NextButtonText>
                </NextButtonWrapper>
              </NextButtonContainer>
            </PageWrapper>
          </ScrollView>
          <PaginationWrapper>
            {Array.from(Array(5).keys()).map((index) => (
              <PaginationDot active={pageIndex === index} key={index} />
            ))}
          </PaginationWrapper>
        </BackgroundWrapper>
      </SafeAreaView>
    </>
  );
}
