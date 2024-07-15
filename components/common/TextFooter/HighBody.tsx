import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');

const HighBody = () => {
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
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.025,
  },
  elementArea: {
    backgroundColor: '#cccccc',
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.0125,
    borderRadius: 8
  },
  slider: {
    width: '100%',
    height: height * 0.05,
  },
  sliderValue: {
    marginTop: height * 0.0125,
    fontSize: width * 0.04,
  }
})

export default HighBody;