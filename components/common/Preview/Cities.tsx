import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Switch, TouchableOpacity, ScrollView } from "react-native";

import { useContent } from "@/app/(cards)/_layout";
import GermanyIcon from '@/assets/images/SVG/Ads_section/germany.svg';
import CloseIcon from '@/assets/images/SVG/Ads_section/close.svg';

const { width } = Dimensions.get('window');

const initialCities = [
  { name: 'City Name 1', total: 'Total Users 10k', icon: <GermanyIcon width={width * 0.04} height={width * 0.04} />, status: false },
  { name: 'City Name 2', total: 'Total Users 10k', icon: <GermanyIcon width={width * 0.04} height={width * 0.04} />, status: false },
  { name: 'City Name 3', total: 'Total Users 10k', icon: <GermanyIcon width={width * 0.04} height={width * 0.04} />, status: false },
  { name: 'City Name 4', total: 'Total Users 10k', icon: <GermanyIcon width={width * 0.04} height={width * 0.04} />, status: false },
];

const Cities = () => {
  const [cities, setCities] = useState(initialCities);
  const { setSelectedCities } = useContent();

  const handleToggle = (index: number) => () => {
    const selectedCount = cities.filter(city => city.status).length;
    const updatedCities = cities.map((city, i) => {
      if (i === index) {
        if (!city.status && selectedCount >= 6) return city;
        return { ...city, status: !city.status };
      }
      return city;
    });
    setCities(updatedCities);
    setSelectedCities(updatedCities.filter(city => city.status === true));
  };

  const handleRemoveLastCity = () => {
    const lastSelectedIndex = cities.slice().reverse().findIndex(city => city.status);
    if (lastSelectedIndex !== -1) {
      const index = cities.length - 1 - lastSelectedIndex;
      const updatedCities = cities.map((city, i) => (i === index ? { ...city, status: false } : city));
      setCities(updatedCities);
      setSelectedCities(updatedCities.filter(city => city.status === true));
    }
  };

  const switchScaleFactor = width / 500;

  const selectedCities = cities.filter(city => city.status).map((city, i) => (
    <View key={i} style={styles.selectedCity}>
      <Text style={styles.selectedCityText}>{city.name}</Text>
    </View>
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select City</Text>
        <Text style={styles.subtitle}>Max. 6 Citys</Text>
      </View>
      <View style={styles.selectedCitiesBar}>
        {selectedCities.length > 0 ? (
          <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.selectedCitiesList}>
              {selectedCities}
            </ScrollView>
            <TouchableOpacity onPress={handleRemoveLastCity} style={styles.closeButton}>
              <CloseIcon width={width * 0.04} height={width * 0.04} />
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.placeholderText}>Select Country</Text>
        )}
      </View>
      <View style={styles.cities}>
        {cities.map((city, index) => (
          <View key={index} style={[styles.cityItem, index !== cities.length - 1 && styles.borderBottom]}>
            {city.icon}
            <View style={styles.cityTextArea}>
              <Text style={styles.cityName}>{city.name}</Text>
              <Text style={styles.cityTotal}>{city.total}</Text>
            </View>
            <Switch
              value={city.status}
              onValueChange={handleToggle(index)}
              style={{ transform: [{ scaleX: switchScaleFactor }, { scaleY: switchScaleFactor }] }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.06,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: width * 0.03,
  },
  title: {
    fontFamily: 'Genos',
    fontSize: width * 0.04,
    color: 'rgba(28, 39, 76, 0.6)',
  },
  subtitle: {
    fontFamily: 'Genos',
    fontSize: width * 0.03,
    color: 'rgba(28, 39, 76, 0.6)',
  },
  selectedCitiesBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: width * 0.1,
    borderColor: 'rgba(28, 39, 76, 0.4)',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    marginBottom: width * 0.04,
  },
  selectedCitiesList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCity: {
    backgroundColor: 'rgba(28, 39, 76, 0.1)',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.01,
    marginRight: width * 0.02,
  },
  selectedCityText: {
    fontSize: width * 0.03,
    color: 'rgba(28, 39, 76, 0.6)',
    fontFamily: 'Genos',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.03,
  },
  placeholderText: {
    fontSize: width * 0.03,
    color: 'rgba(28, 39, 76, 0.6)',
    fontFamily: 'Genos',
  },
  cities: {
    flexDirection: 'column',
  },
  cityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: width * 0.015,
  },
  borderBottom: {
    borderBottomColor: 'rgba(28, 39, 76, 0.1)',
    borderBottomWidth: 1,
  },
  cityTextArea: {
    flexDirection: 'column',
    marginLeft: width * 0.025,
    flex: 1,
  },
  cityName: {
    fontFamily: 'Genos',
    color: 'rgba(28, 39, 76, 0.6)',
    fontSize: width * 0.03,
  },
  cityTotal: {
    fontFamily: 'Genos',
    color: 'rgba(28, 39, 76, 0.4)',
    fontSize: width * 0.025,
  },
});

export default Cities;