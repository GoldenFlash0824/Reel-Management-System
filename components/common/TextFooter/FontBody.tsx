import { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";

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
            <Text style={{ fontFamily: 'Genos', fontSize: 18, color: 'white' }}>Fonts</Text>
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
    padding: 15,
  },
  elementArea: {
    maxHeight: 200,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  element: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedElement: {
    borderWidth: 2,
    borderColor: '#1BC469',
  }
})

export default FontBody;