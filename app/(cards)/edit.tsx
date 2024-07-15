import { useState } from 'react';
import { ImageBackground, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Edit = () => {
  const { content, setContent, textContent, setTextContent, footer } = useContent();
  const [icon, setIcon] = useState<React.ReactNode>(<MediaIcon />);
  const [statusIcon, setStatusIcon] = useState<React.ReactNode>(<MediaStatusIcon />);

  const headerHeight = (82 / 812) * screenHeight;
  const imageHeight = screenHeight - headerHeight;

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <Header style={{ height: headerHeight }}>
          {footer === 'effect' && (
            <TouchableOpacity onPress={() => { router.push("/(cards)") }}>
              <ArrowBackIcon width={screenWidth * 0.08} height={screenWidth * 0.08} />
            </TouchableOpacity>
          )}
          <View style={styles.btnGroup}>
            <TouchableOpacity>
              <BackIcon width={screenWidth * 0.08} height={screenWidth * 0.08} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ForwardIcon width={screenWidth * 0.08} height={screenWidth * 0.08} />
            </TouchableOpacity>
          </View>
          {footer === 'effect' && (
            <TouchableOpacity>
              <ViewIcon width={screenWidth * 0.08} height={screenWidth * 0.08} />
            </TouchableOpacity>
          )}
          {footer === 'text' && (
            <TouchableOpacity>
              <View style={styles.saveBtn}>
                <Text style={{ fontFamily: 'Genos', fontSize: screenWidth * 0.05 }}>Save</Text>
              </View>
            </TouchableOpacity>
          )}
        </Header>
        <View style={{ height: imageHeight, width: screenWidth }}>
          <ImageBackground source={require('@/assets/images/PNG/bg_edit.png')} style={styles.image}>
            <ImageBackground source={require('@/assets/images/PNG/bg_gradient.png')} style={styles.image}></ImageBackground>
          </ImageBackground>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          {footer === 'text' && <DottedIcon />}
        </View>
        {footer === 'effect' ? (
          <EffectFooter
            content={content}
            setContent={setContent}
            icon={icon}
            setIcon={setIcon}
            statusIcon={statusIcon}
            setStatusIcon={setStatusIcon}
          ></EffectFooter>
        ) : (
          <TextFooter content={textContent} setContent={setTextContent} />
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 50,
  },
  saveBtn: {
    backgroundColor: 'white',
    paddingHorizontal: screenWidth * 0.03,
    paddingVertical: screenWidth * 0.01,
    borderRadius: screenWidth * 0.01,
  },
});

export default Edit;