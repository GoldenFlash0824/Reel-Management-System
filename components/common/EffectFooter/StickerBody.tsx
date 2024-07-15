import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text, View, Dimensions } from "react-native";
import StickerSelectorIcon from '@/assets/images/SVG/Stories_section/Sticker_selector.svg';

const { width, height } = Dimensions.get('window');

const StickerBody = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedButton, setSelectedButton] = useState<string>('Sticker');

  const handlePress = (index: number) => {
    setSelected(index);
  };

  const handleButtonPress = (button: string) => {
    setSelectedButton(button);
  };

  const renderElements = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <TouchableOpacity key={i} onPress={() => handlePress(i)}>
        <View style={[styles.element, selected === i && styles.selectedElement]} />
      </TouchableOpacity>
    ));
  };

  const buttons = ['Sticker', 'Gifs', 'Emoji', 'Label'];

  return (
    <View style={styles.container}>
      <View style={styles.selector}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {buttons.map((button) => (
            <TouchableOpacity key={button} onPress={() => handleButtonPress(button)}>
              <View style={[styles.button, selectedButton === button && styles.pressedButton]}>
                <StickerSelectorIcon width={width * 0.05} height={width * 0.05} />
                <Text style={styles.buttonText}>{button}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.elementArea}>
        <ScrollView contentContainerStyle={styles.scrollViewElements}>
          {renderElements()}
        </ScrollView>
      </View>
    </View>
  );
};

const elementSize = width * 0.2;
const gapSize = width * 0.03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
    alignItems: 'center',
  },
  selector: {
    flexDirection: 'row',
    paddingBottom: height * 0.02,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: gapSize / 2,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderRadius: 5,
  },
  pressedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontFamily: 'Genos',
    fontSize: width * 0.04,
    marginLeft: width * 0.009
  },
  elementArea: {
    maxHeight: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewElements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: gapSize,
    justifyContent: 'center',
  },
  element: {
    width: elementSize,
    height: elementSize,
    borderRadius: width * 0.05,
    backgroundColor: '#cccccc',
  },
  selectedElement: {
    borderWidth: width * 0.01,
    borderColor: '#1BC469',
  },
});

export default StickerBody;