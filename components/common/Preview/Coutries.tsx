import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Switch } from "react-native";

import GermanyIcon from '@/assets/images/SVG/Ads_section/germany.svg';
import KurdistanIcon from '@/assets/images/SVG/Ads_section/kurdistan.svg';

const { width } = Dimensions.get('window');

const initialCountries = [
  {
    name: 'Germany',
    total: 'Total Users 10k',
    icon: <GermanyIcon width={width * 0.04} height={width * 0.04} />,
    status: false
  },
  {
    name: 'Kurdistan',
    total: 'Total Users 10M, 999k',
    icon: <KurdistanIcon width={width * 0.04} height={width * 0.04} />,
    status: false
  },
  {
    name: 'Kurdistan',
    total: 'Total Users 10M, 999k',
    icon: <KurdistanIcon width={width * 0.04} height={width * 0.04} />,
    status: false
  },
  {
    name: 'Kurdistan',
    total: 'Total Users 10M, 999k',
    icon: <KurdistanIcon width={width * 0.04} height={width * 0.04} />,
    status: false
  }
];

const Countries = () => {
  const [countries, setCountries] = useState(initialCountries);

  const handleToggle = (index: number) => () => {
    const updatedCountries = countries.map((country, i) =>
      i === index ? { ...country, status: !country.status } : country
    );
    setCountries(updatedCountries);
  };

  const switchScaleFactor = width / 500;

  return (
    <View>
      <View style={styles.notifyTextArea}>
        <Text style={{ fontFamily: 'Genos', fontSize: width * 0.03, color: 'rgba(28, 39, 76, 0.6)' }}>Select Country</Text>
        <Text style={{ fontFamily: 'Genos', fontSize: width * 0.03, color: 'rgba(28, 39, 76, 0.6)' }}>Max. 3 Countrys</Text>
      </View>
      <View style={styles.countries}>
        {countries.map((country, index) => (
          <View key={index} style={[styles.countryItem, index !== countries.length - 1 && styles.borderBottom]}>
            {country.icon}
            <View style={styles.countryTextArea}>
              <Text style={{ fontFamily: 'Genos', color: 'rgba(28, 39, 76, 0.6)', fontSize: width * 0.03 }}>{country.name}</Text>
              <Text style={{ fontFamily: 'Genos', color: 'rgba(28, 39, 76, 0.4)', fontSize: width * 0.025 }}>{country.total}</Text>
            </View>
            <Switch
              value={country.status}
              onValueChange={handleToggle(index)}
              style={{ transform: [{ scaleX: switchScaleFactor }, { scaleY: switchScaleFactor }] }}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  notifyTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.06,
    paddingVertical: width * 0.03
  },
  countries: {
    flexDirection: 'column',
    marginHorizontal: width * 0.06,
    marginTop: width * 0.04
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.015,
  },
  borderBottom: {
    borderBottomColor: 'rgba(28, 39, 76, 0.1)',
    borderBottomWidth: 1,
  },
  countryTextArea: {
    flexDirection: 'column',
    gap: width * 0.01,
    marginLeft: width * 0.025,
    flex: 1
  }
})

export default Countries;