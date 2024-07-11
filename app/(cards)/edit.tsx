import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import Header from '@/components/common/Header';
import Footer from '@/components/common/footer';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import ViewIcon from '@/assets/images/SVG/Stories_section/view.svg';
import BackIcon from '@/assets/images/SVG/Stories_section/left_arrow.svg';
import ForwardIcon from '@/assets/images/SVG/Stories_section/right_arrow.svg';
import FooterElement from '@/components/common/footer/FooterElement';
import MediaIcon from '@/assets/images/SVG/Stories_section/Media.svg';
import MusicIcon from '@/assets/images/SVG/Stories_section/Music.svg';
import TextIcon from '@/assets/images/SVG/Stories_section/Text.svg';
import EffectIcon from '@/assets/images/SVG/Stories_section/Effects.svg';
import StickerIcon from '@/assets/images/SVG/Stories_section/Sticker.svg';
import BackSideIcon from '@/assets/images/SVG/Stories_section/backside.svg';

const footers = [
  {
    icon: <MediaIcon />,
    content: 'Media'
  },
  {
    icon: <MusicIcon />,
    content: 'Music'
  },
  {
    icon: <TextIcon />,
    content: 'Text'
  },
  {
    icon: <EffectIcon />,
    content: 'Effect'
  },
  {
    icon: <StickerIcon />,
    content: 'Sticker'
  },
  {
    icon: <BackSideIcon />,
    content: 'Backside'
  },
];

const Edit = () => {
  const handleClick = () => {

  }

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <ImageBackground source={require('@/assets/images/PNG/bg_edit.png')} style={styles.image}>
          <ImageBackground source={require('@/assets/images/PNG/bg_gradient.png')} style={styles.image}>
            <Header>
              <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                <ArrowBackIcon />
              </TouchableOpacity>
              <View style={styles.btnGroup}>
                <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                  <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                  <ForwardIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <ViewIcon />
              </TouchableOpacity>
            </Header>
            <Footer>
              {footers?.map((footer, index) => (
                <FooterElement key={index} icon={footer?.icon} content={footer?.content} handleClick={handleClick} />
              ))}
            </Footer>
          </ImageBackground>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: 'space-between'
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 50
  }
})

export default Edit;