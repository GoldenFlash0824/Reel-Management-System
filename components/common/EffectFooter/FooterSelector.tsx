import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContent } from "@/app/(cards)/_layout";

const { width } = Dimensions.get('window');

const FooterSelector = ({ icon, selectedSelector, itemContent, handleClick }:
  {
    icon: React.ReactNode,
    selectedSelector: string,
    itemContent: string,
    handleClick: () => void
  }) => {
  const { content } = useContent();
  const [fontsLoaded] = useFonts({
    Genos: require('@/assets/fonts/Genos-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.container, content === '' ? styles.contentEmpty : styles.contentNotEmpty, selectedSelector === itemContent && styles.selectedElement]}>
        {icon}
        <Text style={styles.content}>{itemContent}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.18,
    height: width * 0.2,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentEmpty: {
    backgroundColor: '#565656'
  },
  contentNotEmpty: {
    backgroundColor: '#c0c0c0',
  },
  selectedElement: {
    backgroundColor: '#1BC469'
  },
  content: {
    fontFamily: 'Genos',
    fontSize: width * 0.04,
    color: 'white',
    marginTop: width * 0.02,
    textAlign: 'center',
  }
})

export default FooterSelector;