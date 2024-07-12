import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from "react-native";

import StickerSelectorIcon from '@/assets/images/SVG/Stories_section/Sticker_selector.svg';

const BackSideBody = () => {
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
                <StickerSelectorIcon />
                <Text style={styles.buttonText}>{button}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.elementArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderElements()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
  },
  selector: {
    flexDirection: 'row',
    paddingBottom: 20,
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
  pressedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontFamily: 'Genos',
    fontSize: 18,
  },
  elementArea: {
    maxHeight: 350,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  element: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#cccccc',
  },
  selectedElement: {
    borderWidth: 2,
    borderColor: '#1BC469',
  },
});

export default BackSideBody;