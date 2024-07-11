import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

const FooterElement = ({ icon, content, handleClick }: { icon: React.ReactNode, content: string, handleClick: () => void }) => {
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
      <View style={styles.container}>
        {icon}
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#c0c0c0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontFamily: 'Genos',
    fontSize: 17,
    color: 'white',
    marginTop: 8
  }
})

export default FooterElement;