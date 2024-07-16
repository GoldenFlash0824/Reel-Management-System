import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";

import { useContent } from '@/app/(cards)/_layout';
import DotIcon from '@/assets/images/SVG/dot.svg';
import BackIcon from '@/assets/images/SVG/Ads_section/Back_Return.svg';
import ForwardIcon from '@/assets/images/SVG/Ads_section/Forward_Return.svg';

const { width, height } = Dimensions.get('window');

const FooterHeader = ({ icon, content }: {
  icon: React.ReactNode,
  content: string
}) => {
  const { setFooter } = useContent();

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={styles.textGroup}>
          <DotIcon style={{ marginRight: 5 }} />
          <View>
            {icon}
          </View>
          <DotIcon style={{ marginLeft: 5 }} />
          <Text style={styles.contentText}>{content}</Text>
          <DotIcon style={{ marginLeft: 15 }} />
        </View>
        <View style={styles.arrowGroup}>
          <TouchableOpacity>
            <View style={styles.arrowButton}>
              <BackIcon width={width * 0.04} height={width * 0.04} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.arrowButton}>
              <ForwardIcon width={width * 0.04} height={width * 0.04} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { setFooter('effect') }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Done</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  status: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentText: {
    fontFamily: 'Genos',
    fontSize: width * 0.05,
    color: '#333333',
    marginLeft: width * 0.03,
  },
  arrowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: width * 0.25,
  },
  arrowButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: width * 0.02,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  buttonText: {
    fontFamily: 'Genos',
    fontSize: width * 0.05,
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default FooterHeader;