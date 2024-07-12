import { useState } from 'react';
import { ImageBackground, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';

import Header from '@/components/common/Header';
import EffectFooter from '@/components/common/EffectFooter';
import TextFooter from '@/components/common/TextFooter';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import ViewIcon from '@/assets/images/SVG/Stories_section/view.svg';
import BackIcon from '@/assets/images/SVG/Stories_section/left_arrow.svg';
import ForwardIcon from '@/assets/images/SVG/Stories_section/right_arrow.svg';
import MediaIcon from '@/assets/images/SVG/Stories_section/Media.svg';
import MediaStatusIcon from 'assets/images/SVG/Stories_section/Media_status.svg';
import DottedIcon from 'assets/images/SVG/Ads_section/dotted.svg';
import { useContent } from '@/app/(cards)/_layout';


const Edit = () => {
  const { content, setContent, textContent, setTextContent, footer } = useContent();
  const [icon, setIcon] = useState<React.ReactNode>(<MediaIcon />)
  const [statusIcon, setStatusIcon] = useState<React.ReactNode>(<MediaStatusIcon />)

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <ImageBackground source={require('@/assets/images/PNG/bg_edit.png')} style={styles.image}>
          <ImageBackground source={require('@/assets/images/PNG/bg_gradient.png')} style={styles.image}>
            <Header>
              {footer === 'effect' && <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                <ArrowBackIcon />
              </TouchableOpacity>}
              <View style={styles.btnGroup}>
                <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                  <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
                  <ForwardIcon />
                </TouchableOpacity>
              </View>
              {footer === 'effect' && <TouchableOpacity>
                <ViewIcon />
              </TouchableOpacity>}
              {footer === 'text' && <TouchableOpacity>
                <View style={styles.saveBtn}>
                  <Text style={{ fontFamily: 'Genos' }}>Save</Text>
                </View>
              </TouchableOpacity>}
            </Header>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              {footer === 'text' && <DottedIcon />}
            </View>
            {footer === 'effect' ? <EffectFooter content={content} setContent={setContent} icon={icon} setIcon={setIcon} statusIcon={statusIcon} setStatusIcon={setStatusIcon}>
            </EffectFooter> : <TextFooter content={textContent} setContent={setTextContent} />
            }
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
  saveBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5
  }
})

export default Edit;