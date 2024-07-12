import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import MusicCategoryIcon from '@/assets/images/SVG/Stories_section/Music_category.svg';
import MusicElementLogo from '@/assets/images/SVG/Stories_section/Music_Element_Logo.svg';
import PlayingIcon from '@/assets/images/SVG/Stories_section/Playing.svg';
import PlayIcon from '@/assets/images/SVG/Stories_section/Play.svg';
import CheckedIcon from '@/assets/images/SVG/Stories_section/Checked.svg';
import UnCheckedIcon from '@/assets/images/SVG/Stories_section/Unchecked.svg';

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
          <MusicCategoryIcon />
          <Text style={styles.buttonText}>{category}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const renderMusicElements = () => {
    return musicElements.map((element, index) => (
      <TouchableOpacity key={index} onPress={() => { handleMusicItemPress(index) }}>
        <View style={styles.element}>
          <View style={styles.elementContent}>
            <MusicElementLogo width={65} height={65} />
            <View style={styles.author}>
              <Text style={styles.authorName}>{element.author}</Text>
              <Text style={styles.authorTitle}>{element.title}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            {index === selectedMusicItemIndex ? <PlayingIcon width={30} height={30} /> : <PlayIcon width={30} height={30} />}
          </View>
          <View style={styles.iconContainer}>
            {index === selectedMusicItemIndex ? <CheckedIcon width={30} height={30} /> : <UnCheckedIcon width={30} height={30} />}
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
    paddingHorizontal: 15,
  },
  selector: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  pressedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Genos',
    fontSize: 18,
  },
  elementArea: {
    minHeight: 300,
    height: 300,
    marginTop: 20,
    flexDirection: 'column',
  },
  scrollViewContent: {
    gap: 10,
  },
  element: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
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
    marginLeft: 15,
  },
  authorName: {
    fontFamily: 'Poppins',
  },
  authorTitle: {
    fontFamily: 'Poppins',
    color: '#64748B',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default MusicBody;