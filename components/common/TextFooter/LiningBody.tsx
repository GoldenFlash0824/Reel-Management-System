import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import RightSide from '@/assets/images/SVG/Ads_section/RightSide.svg';
import LeftSide from '@/assets/images/SVG/Ads_section/LeftSide.svg';
import CenterSide from '@/assets/images/SVG/Ads_section/CenterSide.svg';
import Upside from '@/assets/images/SVG/Ads_section/UpSide.svg';
import { useState } from 'react';

const LiningBody = () => {
  const [selected, setSelected] = useState<string>('right');

  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        <TouchableOpacity onPress={() => { setSelected('right') }}>
          <View style={[styles.element, selected === 'right' && styles.selectedElement]}>
            <RightSide />
            <Text style={{ fontFamily: 'Genos' }}>Right Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('left') }}>
          <View style={[styles.element, selected === 'left' && styles.selectedElement]}>
            <LeftSide />
            <Text style={{ fontFamily: 'Genos' }}>Left Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('center') }}>
          <View style={[styles.element, selected === 'center' && styles.selectedElement]}>
            <CenterSide />
            <Text style={{ fontFamily: 'Genos' }}>Center Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('up') }}>
          <View style={[styles.element, selected === 'up' && styles.selectedElement]}>
            <Upside />
            <Text style={{ fontFamily: 'Genos' }}>Upside</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  elementArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  element: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    gap: 10,
    borderColor: '#D9D9D9',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedElement: {
    backgroundColor: '#1BC469'
  }
})

export default LiningBody;