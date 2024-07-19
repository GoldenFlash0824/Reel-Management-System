import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
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

const { width, height } = Dimensions.get('window');

export default function Index() {
  const [fontsLoaded] = useFonts({
    Genos: require('@/assets/fonts/Genos-SemiBold.ttf'),
  });
  const [pressed, setPressed] = useState(-1);

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
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <View style={styles.status}>
              <TouchableOpacity onPress={() => { router.push("/(filter)") }}>
                <Image source={require('@/assets/images/PNG/avatar.png')} style={styles.avatar} />
              </TouchableOpacity>
              <View style={styles.statusText}>
                <Text style={styles.text}>Hallo !!</Text>
                <Text style={styles.text}>Username</Text>
              </View>
            </View>
            <View style={styles.settings}>
              <Image source={require('@/assets/images/PNG/gear.png')} />
            </View>
          </View>
          <View>
            <Text style={styles.readyText}>Ready to Create?</Text>
            <View style={styles.cardsContainer}>
              {[
                {
                  id: 0,
                  icon: <StoryIcon width={width * 0.15} height={width * 0.15} fill="white" />,
                  title: "Create Stories",
                },
                {
                  id: 1,
                  icon: <ReelIcon width={width * 0.15} height={width * 0.15} fill="white" />,
                  title: "Create Reels",
                },
                {
                  id: 2,
                  icon: pressed === 2 ? <WhiteAdsIcon width={width * 0.15} height={width * 0.15} fill="white" /> : <AdsIcon width={width * 0.15} height={width * 0.15} fill="white" />,
                  title: "Create Ads",
                }
              ].map((card, index) => (
                <TouchableOpacity
                  key={index}
                  onPressIn={() => { setPressed(card.id) }}
                  onPressOut={() => { setPressed(-1) }}
                  onPress={() => {
                    setPressed(card.id);
                    router.push({
                      pathname: "/(cards)",
                      params: {
                        status: card.id
                      }
                    });
                    setPressed(-1);
                  }}
                  style={[
                    styles.card,
                    { backgroundColor: pressed === card.id ? '#1BC469' : 'white' }
                  ]}
                >
                  <View style={styles.iconContainer}>
                    {card.icon}
                  </View>
                  <Text style={[styles.cardText, { color: pressed === card.id ? 'white' : '#1C274C' }]}>Let's {card.id === 0 ? "create" : card.id === 1 ? "make" : "promote"}</Text>
                  <Text style={[styles.cardTitle, { color: pressed === card.id ? 'white' : '#1C274C' }]}>{card.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.adsOptionsText}>Our Ads Options</Text>
            <View style={styles.adsOptionsContainer}>
              {[
                {
                  icon: <BusinessIcon width={width * 0.07} height={width * 0.07} fill="white" />,
                  title: "Business",
                  subtitle: "Cards"
                },
                {
                  icon: <ServiceIcon width={width * 0.07} height={width * 0.07} fill="white" />,
                  title: "Services",
                  subtitle: "Flyers"
                },
                {
                  icon: <RestaurantIcon width={width * 0.07} height={width * 0.07} fill="white" />,
                  title: "Restaurant",
                  subtitle: "Offers"
                },
                {
                  icon: <SpecialsIcon width={width * 0.07} height={width * 0.07} fill="white" />,
                  title: "Specials",
                  subtitle: "Offers"
                }
              ].map((option, index) => (
                <View key={index} style={styles.adsOption}>
                  <View style={styles.iconContainer}>
                    {option.icon}
                  </View>
                  <Text style={styles.adsOptionTitle}>{option.title}</Text>
                  <Text style={styles.adsOptionSubtitle}>{option.subtitle}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.03,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.05
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
  },
  statusText: {
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontFamily: 'Genos',
    fontSize: width * 0.04
  },
  settings: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: width * 0.02,
    borderRadius: 8,
  },
  readyText: {
    fontSize: width * 0.08,
    fontFamily: 'Genos',
    color: 'white'
  },
  cardsContainer: {
    width: '100%',
    marginTop: height * 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  card: {
    flexDirection: 'column',
    borderRadius: 12,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    width: '32%',
    marginBottom: height * 0.02,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: width * 0.03,
    fontFamily: 'Genos',
    paddingTop: height * 0.025,
    paddingBottom: height * 0.005,
  },
  cardTitle: {
    fontSize: width * 0.035,
    fontFamily: 'Genos',
    paddingTop: height * 0.006
  },
  adsOptionsText: {
    fontSize: width * 0.06,
    fontFamily: 'Genos',
    color: 'white'
  },
  adsOptionsContainer: {
    width: '100%',
    marginTop: height * 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  adsOption: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    width: '24.2%',
    marginBottom: height * 0.02,
    alignItems: 'center'
  },
  adsOptionTitle: {
    fontSize: width * 0.035,
    fontFamily: 'Genos',
    color: '#1C274C',
    marginTop: height * 0.005
  },
  adsOptionSubtitle: {
    fontSize: width * 0.03,
    fontFamily: 'Genos',
    color: '#1C274C'
  }
});