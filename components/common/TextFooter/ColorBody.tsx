import React from 'react';
import { StyleSheet, View, Dimensions } from "react-native";

const colors = [
  { value: '#1C274C' },
  { value: '#000000' },
  { value: '#1BC469' },
  { value: '#333333' },
  { value: '#5F9CE3' },
  { value: '#ffffff' },
  { value: '#FC4B5D' },
  { value: '#C5180D' }
];

const { width } = Dimensions.get('window');
const elementSize = width * 0.1;
const spacing = width * 0.02;

const ColorBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.element, { backgroundColor: color?.value }]} />
        ))}
      </View>
      <View style={[styles.elementArea, { marginTop: spacing }]}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.element, { backgroundColor: color?.value }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing,
    paddingVertical: spacing,
    display: 'flex',
  },
  elementArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  element: {
    width: elementSize,
    height: elementSize,
    borderRadius: 5,
    marginBottom: spacing,
  },
});

export default ColorBody;