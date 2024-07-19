import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import ArrowBackIcon from '@/assets/images/SVG/Stories_section/left.svg';
import ArrowForwardIcon from '@/assets/images/SVG/Stories_section/right_.svg';
import ArrowDownIcon from '@/assets/images/SVG/Stories_section/bottom.svg';
import CameraIcon from '@/assets/images/SVG/Stories_section/camera.svg';
import { router } from 'expo-router';
import { useContent } from '@/app/(cards)/_layout';

export default function Gallery() {
  const { setContent, setSelectedSelector } = useContent();
  const [loaded] = useFonts({
    'Poppins': require('@/assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { router.push("/(cards)/edit") }}>
          <View style={styles.backBtn}>
            <ArrowBackIcon />
            <Text style={{ fontFamily: 'Poppins' }}>Back</Text>
          </View>
        </TouchableOpacity>
        <CameraIcon />
        <TouchableOpacity onPress={() => {
          setContent('Music');
          setSelectedSelector('Music');
          router.push("/(cards)/edit");
        }}>
          <View style={styles.nextBtn}>
            <Text style={{ fontFamily: 'Poppins', color: 'white' }}>Next</Text>
            <ArrowForwardIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.galleryBar}>
        <Text style={{ fontFamily: 'Poppins', color: '#64748B' }}>Gallery</Text>
        <ArrowDownIcon />
      </View>
      <ImageBackground source={require('@/assets/images/PNG/gallery_bg.png')} style={styles.image}></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 2
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#5F9CE3',
    paddingHorizontal: 15,
    paddingVertical: 2
  },
  galleryBar: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 2,
    gap: 10
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
})