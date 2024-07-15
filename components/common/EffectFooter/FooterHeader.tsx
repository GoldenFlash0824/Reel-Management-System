import React from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import DotIcon from '@/assets/images/SVG/dot.svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

const FooterHeader = ({ statusIcon, content }:
  {
    statusIcon: React.ReactNode,
    content: string
  }) => {

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={styles.textGroup}>
          <View style={styles.dotIcon}>
            <DotIcon />
          </View>
          <View>
            {statusIcon}
          </View>
          <View style={styles.dotIcon}>
            <DotIcon />
          </View>
          <Text style={styles.contentText}>{content}</Text>
          <View style={{ marginLeft: width * 0.03 }}>
            <DotIcon />
          </View>
        </View>
        {content !== 'Media' && (
          <TouchableOpacity onPress={() => router.push("/preview")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: width * 0.03,
    borderTopRightRadius: width * 0.03,
  },
  status: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotIcon: {
    marginHorizontal: width * 0.01,
  },
  contentText: {
    fontFamily: 'Genos',
    fontSize: width * 0.05,
    color: '#333333',
    marginLeft: width * 0.03,
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
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
  }
});

export default FooterHeader;