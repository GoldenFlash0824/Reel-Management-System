import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GalleryIcon from '@/assets/images/gallery_ico.svg';
import ArrowRightIcon from '@/assets/images/arrow_right.svg';
import FlameIcon from '@/assets/images/flame.svg';

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Business Ads</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require('@/assets/images/gallery_card.png')} style={styles.image} />
                  <FlameIcon style={styles.icon} />
                </View>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Business Cards</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require('@/assets/images/gallery_card.png')} style={styles.image} />
                  <FlameIcon style={styles.icon} />
                </View>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Services</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require('@/assets/images/gallery_card.png')} style={styles.image} />
                  <FlameIcon style={styles.icon} />
                </View>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Food Drinks</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require('@/assets/images/gallery_card.png')} style={styles.image} />
                  <FlameIcon style={styles.icon} />
                </View>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Advertisements</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <View key={index} style={styles.card}>
                  <Image source={require('@/assets/images/gallery_card.png')} style={styles.image} />
                  <FlameIcon style={styles.icon} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
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
});
