import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Slider from '@react-native-community/slider';

const SpaceBody = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  elementArea: {
    backgroundColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    marginTop: 10,
    fontSize: 16,
  }
})
export default SpaceBody;