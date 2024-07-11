import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

import Element from '@/components/(cards)/element';
import GalleryIcon from '@/assets/images/gallery_ico.svg';
import ArrowRightIcon from '@/assets/images/arrow_right.svg';

export default function Index() {
  const { status } = useLocalSearchParams<{
    status: string;
  }>();

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Create Stories</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <Element key={index} status={status || ''} />
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <GalleryIcon />
                <Text>Create Reels</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <Text>See All</Text>
                <ArrowRightIcon />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              {Array(3).fill(0).map((_, index) => (
                <Element key={index} status={status || ''} />
              ))}
            </View>
          </View>
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
                <Element key={index} status={status || ''} />
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
                <Element key={index} status={status || ''} />
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
                <Element key={index} status={status || ''} />
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
                <Element key={index} status={status || ''} />
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
                <Element key={index} status={status || ''} />
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
});
