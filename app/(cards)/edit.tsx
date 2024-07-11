import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import Header from '@/components/common/Header';
import Footer from '@/components/common/footer';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import ViewIcon from '@/assets/images/SVG/Stories_section/view.svg';
import BackIcon from '@/assets/images/SVG/Stories_section/left_arrow.svg';
import ForwardIcon from '@/assets/images/SVG/Stories_section/right_arrow.svg';
import MediaIcon from '@/assets/images/SVG/Stories_section/Media.svg';
import MediaStatusIcon from '@/assets/images/SVG/Stories_section/Media_status.svg';
import { useState } from 'react';

const Edit = () => {
  const [content, setContent] = useState<string>('Media');
  const [icon, setIcon] = useState<React.ReactNode>(<MediaIcon />)
  const [statusIcon, setStatusIcon] = useState<React.ReactNode>(<MediaStatusIcon />)

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
            <Footer content={content} setContent={setContent} icon={icon} setIcon={setIcon} statusIcon={statusIcon} setStatusIcon={setStatusIcon}>
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
  },
})

export default Edit;