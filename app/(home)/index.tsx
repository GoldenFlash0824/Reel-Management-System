import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import StoryIcon from '@/assets/images/story.svg';
import ReelIcon from '@/assets/images/reel.svg';
import AdsIcon from '@/assets/images/advertise.svg';
import WhiteAdsIcon from '@/assets/images/advertise_white.svg';
import BusinessIcon from '@/assets/images/business.svg';
import ServiceIcon from '@/assets/images/service.svg';
import RestaurantIcon from '@/assets/images/restaurant.svg';
import SpecialsIcon from '@/assets/images/specials.svg';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Genos: require('@/assets/fonts/Genos-SemiBold.ttf'),
  });
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/home_bg.png')} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <View style={styles.status}>
              <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
              <View style={styles.statusText}>
                <Text style={styles.text}>Hallo !!</Text>
                <Text style={styles.text}>Username</Text>
              </View>
            </View>
            <View style={styles.settings}>
              <Image source={require('@/assets/images/gear.png')} style={styles.avatar} />
              {/* <GearIcon width={25} height={25} fill="white" /> */}
            </View>
          </View>
          <View>
            <Text style={styles.readyText}>Ready to Create?</Text>
            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <StoryIcon width={60} height={60} fill="white" />
                </View>
                <Text style={{ fontSize: 12, fontFamily: 'Genos', color: '#1C274C', paddingTop: 12, paddingBottom: 6 }}>Let's create</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C' }}>Create Stories</Text>
                <Text style={{ fontSize: 10, fontFamily: 'Genos', color: '#1C274C', paddingTop: 5 }}>Share your moments</Text>
              </View>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <ReelIcon width={60} height={60} fill="white" />
                </View>
                <Text style={{ fontSize: 12, fontFamily: 'Genos', color: '#1C274C', paddingTop: 12, paddingBottom: 6 }}>Let's Make</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C' }}>Create Reels</Text>
                <Text style={{ fontSize: 10, fontFamily: 'Genos', color: '#1C274C', paddingTop: 5 }}>Capture short videos</Text>
              </View>
              <TouchableOpacity
                onPressIn={() => { setPressed(true) }}
                onPressOut={() => { setPressed(false) }}
                onPress={() => {
                  setPressed(true);
                  router.push("/(gallery)")
                }}
                style={{ flexDirection: 'column', backgroundColor: pressed ? '#37CC8A' : 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  {pressed ? <WhiteAdsIcon width={60} height={60} fill="white" /> : <AdsIcon width={60} height={60} fill="white" />}
                </View>
                <Text style={{ fontSize: 12, fontFamily: 'Genos', color: pressed ? 'white' : '#1C274C', paddingTop: 12, paddingBottom: 6 }}>Let's Promote</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Genos', color: pressed ? 'white' : '#1C274C', }}>Create Ads</Text>
                <Text style={{ fontSize: 10, fontFamily: 'Genos', color: pressed ? 'white' : '#1C274C', paddingTop: 5 }}>Reach your audience</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 23, fontFamily: 'Genos', color: 'white' }}>Our Ads Options</Text>
            <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <BusinessIcon width={35} height={35} fill="white" />
                  <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C', marginTop: 5 }}>Business</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'Genos', color: '#1C274C' }}>Cards</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <ServiceIcon width={35} height={35} fill="white" />
                  <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C', marginTop: 5 }}>Services</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'Genos', color: '#1C274C' }}>Flyers</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <RestaurantIcon width={35} height={35} fill="white" />
                  <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C', marginTop: 5 }}>Restaurant</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'Genos', color: '#1C274C' }}>Offers</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <SpecialsIcon width={35} height={35} fill="white" />
                  <Text style={{ fontSize: 15, fontFamily: 'Genos', color: '#1C274C', marginTop: 5 }}>Specials</Text>
                  <Text style={{ fontSize: 13, fontFamily: 'Genos', color: '#1C274C' }}>Offers</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 20,
    height: 20,
  },
  statusText: {
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontFamily: 'Genos'
  },
  settings: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 7,
    borderRadius: 8,
  },
  body: {
    flexDirection: 'row'
  },
  readyText: {
    fontSize: 32,
    fontFamily: 'Genos',
    color: 'white'
  }
});
