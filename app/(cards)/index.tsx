import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';

import { useContent } from '@/app/(cards)/_layout';
import Element from '@/components/(cards)/element';
import GalleryIcon from '@/assets/images/gallery_ico.svg';
import ArrowRightIcon from '@/assets/images/arrow_right.svg';

export default function Index() {
  const { status } = useLocalSearchParams<{
    status: string;
  }>();

  const { setStatus } = useContent();

  useEffect(() => {
    if (status) {
      setStatus(parseInt(status));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const renderCategory = (title: string) => (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <View style={styles.categoryTitle}>
          <GalleryIcon />
          <Text>{title}</Text>
        </View>
        <View style={styles.seeAll}>
          <Text>See All</Text>
          <ArrowRightIcon />
        </View>
      </View>
      <View style={styles.elementsContainer}>
        {Array(3).fill(0).map((_, index) => (
          <Element key={index} style={styles.element} />
        ))}
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <ScrollView>
          {renderCategory('Create Stories')}
          {renderCategory('Create Reels')}
          {renderCategory('Business Ads')}
          {renderCategory('Business Cards')}
          {renderCategory('Services')}
          {renderCategory('Food Drinks')}
          {renderCategory('Advertisements')}
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
  categoryContainer: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  elementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  element: {
    width: (Dimensions.get('window').width - 60) / 3,
    height: ((Dimensions.get('window').width - 60) / 3) * 1.5,
  },
});
