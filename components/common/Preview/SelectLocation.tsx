import React, { useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

import Countries from '@/components/common/Preview/Coutries';
import Cities from '@/components/common/Preview/Cities';
import CountryIcon from '@/assets/images/SVG/Ads_section/country.svg';
import CityIcon from '@/assets/images/SVG/Ads_section/city.svg';
import InfoIcon from '@/assets/images/SVG/Ads_section/info.svg';
import DotIcon from '@/assets/images/SVG/dot.svg';

const { width } = Dimensions.get('window');

const SelectLocation = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (index: number) => () => {
    setSelected(index);
  };

  const countryStyle = useMemo(() => [
    styles.selectElement,
    selected === 0 ? styles.selectedElement : styles.unselectedElement
  ], [selected]);

  const cityStyle = useMemo(() => [
    styles.selectElement,
    selected === 1 ? styles.selectedElement : styles.unselectedElement
  ], [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.whiteBoard}>
        <View style={styles.selectArea}>
          <View style={countryStyle}>
            <TouchableOpacity onPress={handleSelect(0)} style={styles.iconTextContainer}>
              <CountryIcon width={width * 0.06} height={width * 0.06} />
              <View style={styles.textarea}>
                <Text style={styles.mainText}>Select Country</Text>
                <Text style={styles.subText}>Share in whole Country</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={cityStyle}>
            <TouchableOpacity onPress={handleSelect(1)} style={styles.iconTextContainer}>
              <CityIcon width={width * 0.06} height={width * 0.06} />
              <View style={styles.textarea}>
                <Text style={styles.mainText}>Select City's</Text>
                <Text style={styles.subText}>Share your Single City</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoArea}>
          <InfoIcon width={width * 0.09} height={width * 0.09} />
          <View style={styles.infoTextArea}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: width * 0.02 }}>
              <DotIcon />
              <Text style={{ fontFamily: 'Genos', color: '#64748B', fontSize: width * 0.04 }}>Information</Text>
              <DotIcon />
            </View>
            <Text style={{ fontFamily: 'Genos', color: '#FF3257', fontSize: width * 0.03 }}>No Backup found on this Account</Text>
          </View>
        </View>
        <View>
          {selected === 0 && <Countries />}
          {selected === 1 && <Cities />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: width * 0.03,
    display: 'flex',
    flexDirection: 'column'
  },
  whiteBoard: {
    backgroundColor: 'white',
    borderRadius: width * 0.01,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.05,
    marginHorizontal: width * 0.015
  },
  selectArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    borderRadius: width * 0.015,
    padding: width * 0.018,
    gap: width * 0.04,
    flexDirection: 'row',
    marginHorizontal: width * 0.03
  },
  selectElement: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: width * 0.015,
    padding: width * 0.02,
    alignItems: 'center'
  },
  unselectedElement: {
    backgroundColor: '#D9D9D9'
  },
  selectedElement: {
    backgroundColor: 'white'
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
  },
  textarea: {
    flexDirection: 'column',
    gap: width * 0.01
  },
  mainText: {
    fontFamily: 'Genos',
    color: 'rgba(28, 39, 76, 0.6)',
    fontSize: width * 0.03
  },
  subText: {
    fontFamily: 'Genos',
    color: 'rgba(28, 39, 76, 0.6)',
    fontSize: width * 0.02
  },
  infoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    marginTop: width * 0.02,
    backgroundColor: '#F2F2F2',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.035,
    paddingVertical: width * 0.02,
    gap: width * 0.04
  },
  infoTextArea: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    gap: width * 0.01
  },
});

export default SelectLocation;