import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { router } from "expo-router";

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import PreviewBackIcon from '@/assets/images/SVG/Ads_section/preview_back.svg';
import PreviewForwardIcon from '@/assets/images/SVG/Ads_section/preview_forward.svg';
import { useContent } from "@/app/(cards)/_layout";
import { SetStateAction } from "react";

const { width } = Dimensions.get('window');

const Step1 = ({ setStep }: { setStep: React.Dispatch<SetStateAction<number>> }) => {

  const { status } = useContent();
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => {
          router.push("/(cards)/edit");
          setStep(1);
        }}>
          <ArrowBackIcon width={width * 0.08} height={width * 0.08} />
        </TouchableOpacity>
      </Header>
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}></ImageBackground>
      {status === 2 && <Footer style={{ backgroundColor: 'black' }}>
        <TouchableOpacity onPress={() => { router.push("/(cards)/edit") }}>
          <PreviewBackIcon width={width * 0.08} height={width * 0.08} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setStep(2) }}>
          <PreviewForwardIcon width={width * 0.08} height={width * 0.08} />
        </TouchableOpacity>
      </Footer>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
})

export default Step1;