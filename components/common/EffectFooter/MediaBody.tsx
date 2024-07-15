import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import AllowAccessIcon from '@/assets/images/SVG/Stories_section/Allow access.svg';
import TickIcon from '@/assets/images/SVG/Stories_section/Tick.svg';
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

const MediaBody = () => {
  return (
    <View style={styles.container}>
      <View>
        <AllowAccessIcon width={width * 0.5} height={height * 0.3} />
      </View>
      <TouchableOpacity onPress={() => {
        router.push("(cards)/gallery");
      }}>
        <View style={styles.btnArea}>
          <TickIcon width={width * 0.05} height={width * 0.05} />
          <Text style={styles.btnText}>Allow access</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.04,
  },
  btnArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BC469',
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.03,
  },
  btnText: {
    color: 'white',
    fontSize: width * 0.045,
    marginLeft: width * 0.02,
  }
})

export default MediaBody;