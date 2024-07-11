import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import FlameIcon from '@/assets/images/flame.svg';

const Element = ({ status }: { status: string }) => {
  return (
    <TouchableOpacity onPress={() => {
      router.push({
        pathname: "/(cards)/edit",
        params: {
          status: status
        }
      })
    }}>
      <View style={styles.card}>
        <Image source={require('@/assets/images/PNG/gallery_card.png')} style={styles.image} />
        <FlameIcon style={styles.icon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    bottom: 3,
    left: 5,
  },
})

export default Element;