import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import background from "../../assets/images/gggs_background.png";

import { useNavigation } from "@react-navigation/native";


import {
  BackgroundWrapper,
  Logo,
  NextButtonText,
  NextButtonWrapper,
  PageDescription,
  PageTitle,
  PageTitleWrapper,
  PageWrapper,
  PaginationDot,
  PaginationWrapper,
} from "./styles";

export function IntroSlider() {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get("window");

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const navigation = useNavigation();

  async function goHome() {
    navigation.navigate("Login");
  }

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <BackgroundWrapper
          source={background}
          resizeMode="cover"
        >
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={0.2}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event: any) => {
              setSliderPage(event);
            }}
          >
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Olá usuário!</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Lorem ipsum dolor sit amet</PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Seja bem-vindo(a) à Grati</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Lorem ipsum dolor sit amet</PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Sua nova rede social corporativa</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Lorem ipsum dolor sit amet</PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Podendo gratificar e ser gratificado</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Lorem ipsum dolor sit amet</PageDescription>
            </PageWrapper>
            <PageWrapper>
              <Logo />
              <PageTitleWrapper>
                <PageTitle>Ainda não possui conta?</PageTitle>
              </PageTitleWrapper>
              <PageDescription>Lorem ipsum dolor sit amet</PageDescription>
              <NextButtonWrapper onPress={goHome}>
                <NextButtonText>&gt;</NextButtonText>
              </NextButtonWrapper>
            </PageWrapper>
          </ScrollView>
          <PaginationWrapper>
            {Array.from(Array(5).keys()).map((index) => (
              <PaginationDot
                active={pageIndex === index}
                key={index}
              />
            ))}
          </PaginationWrapper>
        </BackgroundWrapper>
      </SafeAreaView>
    </>
  );
}