import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import RightSide from '@/assets/images/SVG/Ads_section/RightSide.svg';
import LeftSide from '@/assets/images/SVG/Ads_section/LeftSide.svg';
import CenterSide from '@/assets/images/SVG/Ads_section/CenterSide.svg';
import Upside from '@/assets/images/SVG/Ads_section/UpSide.svg';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

const LiningBody = () => {
  const [selected, setSelected] = useState<string>('right');

  return (
    <View style={styles.container}>
      <View style={styles.elementArea}>
        <TouchableOpacity onPress={() => { setSelected('right') }}>
          <View style={[styles.element, selected === 'right' && styles.selectedElement]}>
            <RightSide width={width * 0.08} height={width * 0.08} />
            <Text style={styles.text}>Right Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('left') }}>
          <View style={[styles.element, selected === 'left' && styles.selectedElement]}>
            <LeftSide width={width * 0.08} height={width * 0.08} />
            <Text style={styles.text}>Left Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('center') }}>
          <View style={[styles.element, selected === 'center' && styles.selectedElement]}>
            <CenterSide width={width * 0.08} height={width * 0.08} />
            <Text style={styles.text}>Center Side</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setSelected('up') }}>
          <View style={[styles.element, selected === 'up' && styles.selectedElement]}>
            <Upside width={width * 0.08} height={width * 0.08} />
            <Text style={styles.text}>Upside</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.05
  },
  elementArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  element: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.02,
    borderWidth: 1,
    gap: width * 0.01,
    borderColor: '#D9D9D9',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedElement: {
    backgroundColor: '#1BC469'
  },
  text: {
    fontFamily: 'Genos',
    fontSize: width * 0.03,
  }
})

export default LiningBody;