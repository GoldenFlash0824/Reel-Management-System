import { View, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Text } from "react-native"
import { SetStateAction, useState } from "react";

import { useContent } from "@/app/(cards)/_layout";
import Header from '@/components/common/Header';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import EducatedUserIcon from '@/assets/images/SVG/Ads_section/Educated User.svg';
import CultivatedUserIcon from '@/assets/images/SVG/Ads_section/Cultivated User.svg';
import AcademicUserIcon from '@/assets/images/SVG/Ads_section/Academic User.svg';
import StandardIcon from '@/assets/images/SVG/Ads_section/standard.svg';
import PremiumIcon from '@/assets/images/SVG/Ads_section/Premium.svg';
import AdvancedIcon from '@/assets/images/SVG/Ads_section/Advanced.svg';
import CheckedIcon from '@/assets/images/SVG/Ads_section/checked.svg';
import UncheckedIcon from '@/assets/images/SVG/Ads_section/unchecked.svg';
import TickIcon from '@/assets/images/SVG/Ads_section/Tick.svg';
import AcceptedIcon from '@/assets/images/SVG/Ads_section/accepted.svg';
import UnAcceptedIcon from '@/assets/images/SVG/Ads_section/unaccepted.svg';

const { width } = Dimensions.get('window');

const users = [
  {
    title: 'Educated User',
    count: '2M - 12K',
    icon: <EducatedUserIcon width={width * 0.08} height={width * 0.08} />
  },
  {
    title: 'Cultivated User',
    count: '2M - 12K',
    icon: <CultivatedUserIcon width={width * 0.08} height={width * 0.08} />
  },
  {
    title: 'Academic User',
    count: '2M - 12K',
    icon: <AcademicUserIcon width={width * 0.08} height={width * 0.08} />
  },
]

const plans = [
  {
    title: 'Standard',
    price: 1.99,
    deadline: '2 Days in the selected category',
    icon: <StandardIcon width={width * 0.08} height={width * 0.08} />
  },
  {
    title: 'Premium',
    price: 15.99,
    deadline: '3 Days in Selected Category Area in Selected Location in Header',
    icon: <PremiumIcon width={width * 0.08} height={width * 0.08} />
  },
  {
    title: 'Advanced',
    price: 25.99,
    deadline: '5 Days in Selected Category and in Feeds Area',
    icon: <AdvancedIcon width={width * 0.08} height={width * 0.08} />
  },
]

const Step3 = ({ setStep }: { setStep: React.Dispatch<SetStateAction<number>> }) => {
  const { selectedCities } = useContent();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const [accepted, setAccepted] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => { setStep(2) }}>
          <ArrowBackIcon width={width * 0.08} height={width * 0.08} />
        </TouchableOpacity>
      </Header>
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}>
        <ImageBackground source={require('@/assets/images/PNG/bg_gray.png')} style={styles.image}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.selection}>
              <Text style={{ fontFamily: 'Genos', color: 'white', fontSize: width * 0.04 }}>Your Selections</Text>
              <View style={styles.selectionArea}>
                <Text style={{ fontFamily: 'Genos', color: 'rgba(28, 39, 76, 0.6)', fontSize: width * 0.035 }}>Selected City</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', gap: width * 0.02, marginVertical: width * 0.03 }}>
                  {selectedCities?.map((selectedCity, index) => (
                    <View key={index} style={styles.selectedCityItem}>
                      {selectedCity?.icon}
                      <Text style={{ fontFamily: 'Genos', color: 'rgba(28, 39, 76, 0.6)' }}>{selectedCity?.name}</Text>
                    </View>
                  ))}
                </View>
                <View style={{ borderBottomColor: 'rgba(28, 39, 76, 0.1)', borderBottomWidth: 2, marginHorizontal: width * 0.03 }}></View>
                <Text style={{ fontFamily: 'Genos', color: 'rgba(28, 39, 76, 0.6)', fontSize: width * 0.035, marginVertical: width * 0.025 }}>Total Users</Text>
                <View style={styles.userArea}>
                  {users.map((user, index) => (
                    <View key={index} style={styles.userElement}>
                      {user.icon}
                      <Text style={{ fontFamily: 'Genos', color: '#7f7f7f', fontSize: width * 0.03 }}>{user.title}</Text>
                      <Text style={{ fontFamily: 'Genos', color: '#bfbfbf', fontSize: width * 0.03 }}>{user.count}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <Text style={{ fontFamily: 'Genos', color: 'white', fontSize: width * 0.04 }}>Select ur Plan</Text>
              <View style={{ marginTop: width * 0.03, gap: width * 0.03 }}>
                {plans.map((plan, index) => (
                  <TouchableOpacity key={index} onPress={() => { setSelectedPlanIndex(index) }}>
                    <View style={styles.planItem}>
                      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: width * 0.02 }}>
                          {plan.icon}
                          <Text style={{ fontFamily: 'Genos', fontSize: width * 0.04 }}>{plan.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: width * 0.02 }}>
                          <Text style={{ fontFamily: 'Genos', fontSize: width * 0.04, color: 'red' }}>{plan.price} €</Text>
                          {index === selectedPlanIndex ? <CheckedIcon style={{ width: width * 0.03 }} /> : <UncheckedIcon style={{ width: width * 0.03 }} />}
                        </View>
                      </View>
                      <View style={{ flexDirection: "row", gap: width * 0.01, paddingHorizontal: width * 0.06 }}>
                        <TickIcon />
                        <Text style={{ fontFamily: 'Genos', fontSize: width * 0.03 }}>{plan.deadline}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <TouchableOpacity onPress={() => { setAccepted(!accepted) }}>
                <View style={{ backgroundColor: '#f5f4f3', marginTop: width * 0.05, paddingHorizontal: width * 0.03, paddingVertical: width * 0.02, borderRadius: width * 0.02 }}>
                  <View style={{ flexDirection: 'row' }}>
                    {accepted ? <AcceptedIcon width={width * 0.04} height={width * 0.04} /> : <UnAcceptedIcon width={width * 0.04} height={width * 0.04} />}
                    <Text style={{ fontFamily: "Genos", color: 'rgba(0, 0, 0, 0.6)', marginLeft: width * 0.02, fontSize: width * 0.03 }}>Accept policy and</Text>
                    <Text style={{ fontFamily: "Genos", color: '#2B99FF', fontSize: width * 0.03 }}> terms</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: width * 0.03 }}>
              <TouchableOpacity onPress={() => {
                if (accepted) {
                  setStep(4)
                }
              }}>
                <View style={{ backgroundColor: 'white', paddingHorizontal: width * 0.03, paddingVertical: width * 0.02, marginTop: width * 0.05, borderRadius: width * 0.05 }}>
                  <Text style={{ fontFamily: 'Genos', fontSize: width * 0.035 }}>Publish now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </ImageBackground >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewContent: {
    paddingVertical: width * 0.03
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  selection: {
    paddingHorizontal: width * 0.02,
  },
  selectionArea: {
    backgroundColor: 'white',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.02,
    marginVertical: width * 0.04
  },
  selectedCityItem: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    gap: width * 0.025,
    alignItems: 'center',
    paddingHorizontal: width * 0.015,
    paddingVertical: width * 0.015,
    borderRadius: width * 0.01
  },
  userArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: width * 0.03,
    gap: width * 0.03
  },
  userElement: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: width * 0.02,
    padding: width * 0.015,
    gap: width * 0.01
  },
  planItem: {
    padding: width * 0.02,
    flexDirection: 'column',
    gap: width * 0.02,
    backgroundColor: 'white',
    borderRadius: width * 0.02
  }
})

export default Step3;