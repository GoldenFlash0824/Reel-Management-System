import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import MusicCategoryIcon from '@/assets/images/SVG/Stories_section/Music_category.svg';
import MusicElementLogo from '@/assets/images/SVG/Stories_section/Music_Element_Logo.svg';
import PlayingIcon from '@/assets/images/SVG/Stories_section/Playing.svg';
import PlayIcon from '@/assets/images/SVG/Stories_section/Play.svg';
import CheckedIcon from '@/assets/images/SVG/Stories_section/Checked.svg';
import UnCheckedIcon from '@/assets/images/SVG/Stories_section/Unchecked.svg';

const { width, height } = Dimensions.get('window');

const categories = ['Songs', 'Songs', 'Songs', 'Songs'];
const musicElements = [
  { author: 'Shevan Perwer', title: 'Hozanem' },
  { author: 'Shevan Perwer', title: 'Hozanem' },
  { author: 'Shevan Perwer', title: 'Hozanem' },
  { author: 'Shevan Perwer', title: 'Hozanem' },
];

const MusicBody = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedMusicItemIndex, setSelectedMusicItemIndex] = useState<number>(0);

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

  const handleCategoryPress = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const handleMusicItemPress = (index: number) => {
    setSelectedMusicItemIndex(index);
  };

  const renderCategories = () => {
    return categories.map((category, index) => (
      <TouchableOpacity key={index} onPress={() => handleCategoryPress(index)}>
        <View style={index === selectedCategoryIndex ? styles.pressedButton : styles.button}>
          <MusicCategoryIcon width={width * 0.06} height={width * 0.06} />
          <Text style={styles.buttonText}>{category}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderMusicElements = () => {
    return musicElements.map((element, index) => (
      <TouchableOpacity key={index} onPress={() => handleMusicItemPress(index)}>
        <View style={styles.element}>
          <View style={styles.elementContent}>
            <MusicElementLogo width={width * 0.15} height={width * 0.15} />
            <View style={styles.author}>
              <Text style={styles.authorName}>{element.author}</Text>
              <Text style={styles.authorTitle}>{element.title}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            {index === selectedMusicItemIndex ? <PlayingIcon width={width * 0.08} height={width * 0.08} /> : <PlayIcon width={width * 0.08} height={width * 0.08} />}
          </View>
          <View style={styles.iconContainer}>
            {index === selectedMusicItemIndex ? <CheckedIcon width={width * 0.08} height={width * 0.08} /> : <UnCheckedIcon width={width * 0.08} height={width * 0.08} />}
          </View>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.selector}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {renderCategories()}
        </ScrollView>
      </View>
      <View style={styles.elementArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderMusicElements()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: width * 0.04,
    paddingBottom: width * 0.01
  },
  selector: {
    flexDirection: 'row',
    paddingTop: height * 0.02,
  },
  pressedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    borderRadius: width * 0.02,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    borderRadius: width * 0.02,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: width * 0.04,
  },
  elementArea: {
    minHeight: height * 0.4,
    height: height * 0.4,
    marginTop: height * 0.02,
    flexDirection: 'column',
  },
  scrollViewContent: {
    gap: width * 0.02,
  },
  element: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.04,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: 2,
  },
  elementContent: {
    flexDirection: 'row',
    flex: 3,
  },
  author: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: width * 0.04,
  },
  authorName: {
    fontFamily: 'Poppins',
    fontSize: width * 0.04,
  },
  authorTitle: {
    fontFamily: 'Poppins',
    fontSize: width * 0.035,
    color: '#64748B',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default MusicBody;