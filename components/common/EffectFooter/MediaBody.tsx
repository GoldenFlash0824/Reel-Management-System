import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AllowAccessIcon from '@/assets/images/SVG/Stories_section/Allow access.svg'
import TickIcon from '@/assets/images/SVG/Stories_section/Tick.svg'
import { router } from "expo-router";

const MediaBody = () => {
  return (
    <View style={styles.container}>
      <AllowAccessIcon />
      <TouchableOpacity onPress={() => {
        router.push("(cards)/gallery");
      }}>
        <View style={styles.btnArea}>
          <TickIcon />
          <Text style={{ color: 'white' }}>Allow access</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },
  btnArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BC469',
    gap: 15,
    marginTop: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10
  }
})

export default MediaBody;