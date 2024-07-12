import { StyleSheet, View } from "react-native";

const colors = [
  {
    value: '#1C274C'
  },
  {
    value: '#000000'
  },
  {
    value: '#1BC469'
  },
  {
    value: '#333333'
  },
  {
    value: '#5F9CE3'
  },
  {
    value: '#ffffff'
  },
  {
    value: '#FC4B5D'
  },
  {
    value: '#C5180D'
  }
]

const ColorBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.element, { backgroundColor: color?.value }]}></View>
        ))
        }
      </View>
      <View style={[styles.elementArea, { marginTop: 20 }]}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.element, { backgroundColor: color?.value }]}></View>
        ))
        }
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex'
  },
  elementArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  element: {
    width: 40,
    height: 40,
    borderRadius: 5
  }
})

export default ColorBody;