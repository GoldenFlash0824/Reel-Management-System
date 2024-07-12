import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";

const BackSideBody = () => {
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
    display: 'flex',
    padding: 15,
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