import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const FontBody = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setSelected(index);
  }

  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push(
        <TouchableOpacity key={i} onPress={() => { handlePress(i) }}>
          <View style={[styles.element, selected === i && styles.selectedElement]}>
            <Text style={styles.elementText}>Fonts</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return elements;
  }

  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderElements()}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: width * 0.04,
  },
  elementArea: {
    maxHeight: height * 0.25,
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: width * 0.03,
  },
  element: {
    width: width * 0.2,
    height: height * 0.05,
    borderRadius: width * 0.02,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedElement: {
    borderWidth: 2,
    borderColor: '#1BC469',
  },
  elementText: {
    fontFamily: 'Genos',
    fontSize: width * 0.045,
    color: 'white',
  },
});

export default FontBody;