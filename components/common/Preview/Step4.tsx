import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, Text } from "react-native";
import { SetStateAction } from "react";

import Header from '@/components/common/Header';
import ArrowBackIcon from '@/assets/images/SVG/Stories_section/back-.svg';
import ThumbUpIcon from '@/assets/images/SVG/Ads_section/thumb.svg';
import FeedIcon from '@/assets/images/SVG/Ads_section/Feeds.svg';
import HistoryIcon from '@/assets/images/SVG/Ads_section/History.svg';
import ShopingIcon from '@/assets/images/SVG/Ads_section/Shoping.svg';
import VotingIcon from '@/assets/images/SVG/Ads_section/Voting.svg';
import ServicesIcon from '@/assets/images/SVG/Ads_section/Services.svg';
import BazarIcon from '@/assets/images/SVG/Ads_section/Bazar.svg';
import MusicIcon from '@/assets/images/SVG/Ads_section/Music.svg';
import EventsIcon from '@/assets/images/SVG/Ads_section/Events.svg';
import DotIcon from '@/assets/images/SVG/dot.svg';

const { width } = Dimensions.get('window');

const events = [
  {
    name: 'Feeds',
    icon: <FeedIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'History',
    icon: <HistoryIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Shoping',
    icon: <ShopingIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Voting',
    icon: <VotingIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Services',
    icon: <ServicesIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Bazar',
    icon: <BazarIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Music',
    icon: <MusicIcon width={width * 0.1} height={width * 0.1} />
  },
  {
    name: 'Events',
    icon: <EventsIcon width={width * 0.1} height={width * 0.1} />
  },
]

const Step4 = ({ setStep }: { setStep: React.Dispatch<SetStateAction<number>> }) => {
  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={() => {
          setStep(3);
        }}>
          <ArrowBackIcon width={width * 0.08} height={width * 0.08} />
        </TouchableOpacity>
      </Header>
      <ImageBackground source={require('@/assets/images/PNG/home_bg.png')} style={styles.image}>
        <ImageBackground source={require('@/assets/images/PNG/bg_gray.png')} style={styles.image}>
          <View style={styles.area}>
            <ThumbUpIcon width={width * 0.2} height={width * 0.2} style={styles.thumbIcon} />
            <Text style={styles.usernameText}>Username</Text>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                Thank you Watching and we wish a nice day on our Portal
              </Text>
            </View>
            <View style={styles.eventArea}>
              {events.map((event, index) => (
                <View key={index} style={styles.eventElement}>
                  {event.icon}
                  <View style={styles.eventTextContainer}>
                    <DotIcon />
                    <Text style={styles.eventText}>{event.name}</Text>
                    <DotIcon />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  area: {
    marginTop: width * 0.2,
    marginHorizontal: width * 0.05,
    paddingHorizontal: width * 0.03,
    paddingBottom: width * 0.03,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: width * 0.02,
    paddingVertical: width * 0.05
  },
  thumbIcon: {
    position: 'absolute',
    top: -width * 0.1
  },
  usernameText: {
    marginTop: width * 0.08,
    fontFamily: 'Genos',
    fontSize: width * 0.06,
    textAlign: 'center'
  },
  messageContainer: {
    marginHorizontal: width * 0.1,
    marginTop: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  messageText: {
    fontFamily: 'Genos',
    fontSize: width * 0.03,
    color: '#64748B',
    textAlign: 'center'
  },
  eventArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: width * 0.05,
    columnGap: width * 0.02,
    marginTop: width * 0.08,
  },
  eventElement: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: width * 0.02,
    width: '23%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: width * 0.015,
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.02
  },
  eventTextContainer: {
    flexDirection: 'row',
    gap: width * 0.01,
    alignItems: 'center'
  },
  eventText: {
    color: '#64748B',
    fontSize: width * 0.03
  }
});

export default Step4;