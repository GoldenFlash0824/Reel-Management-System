import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { router } from "expo-router";

import Header from '@/components/common/Header';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';

const { width } = Dimensions.get('window');

export default function Preview() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}>
        <Header>
          <TouchableOpacity onPress={() => { router.push("/(cards)/edit") }}>
            <ArrowBackIcon width={width * 0.08} height={width * 0.08} />
          </TouchableOpacity>
        </Header>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
  },
})