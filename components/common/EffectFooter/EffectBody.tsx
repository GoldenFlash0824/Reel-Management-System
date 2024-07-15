import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const EffectBody = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setSelected(index);
  };

  const renderElements = () => {
    const elements = [];
    for (let i = 0; i < 12; i++) {
      elements.push(
        <TouchableOpacity key={i} onPress={() => handlePress(i)}>
          <View style={[styles.element, selected === i && styles.selectedElement]} />
        </TouchableOpacity>
      );
    }
    return elements;
  };

  return (
    <View style={styles.container}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.04,
  },
  elementArea: {
    maxHeight: height * 0.4,
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
    height: width * 0.2,
    borderRadius: width * 0.05,
    backgroundColor: '#cccccc',
  },
  selectedElement: {
    borderWidth: width * 0.005,
    borderColor: '#1BC469',
  },
});

export default EffectBody;