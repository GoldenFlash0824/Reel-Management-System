import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"
import { router } from "expo-router";

import Header from '@/components/common/Header';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';

export default function Preview() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}>
        <Header>
          <TouchableOpacity onPress={() => { router.push("/(cards)/edit") }}>
            <ArrowBackIcon />
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