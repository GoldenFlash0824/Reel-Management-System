import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import DotIcon from '@/assets/images/SVG/dot.svg'
import BackIcon from '@/assets/images/SVG/Ads_section/Back_Return.svg'
import ForwardIcon from '@/assets/images/SVG/Ads_section/Forward_Return.svg'

const FooterHeader = ({ icon, content }: {
  icon: React.ReactNode,
  content: string
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={styles.textGroup}>
          <DotIcon style={{ marginRight: 5 }} />
          <View>
            {icon}
          </View>
          <DotIcon style={{ marginLeft: 5 }} />
          <Text style={{ fontFamily: 'Genos', fontSize: 20, color: '#333333', marginLeft: 15 }}>{content}</Text>
          <DotIcon style={{ marginLeft: 15 }} />
        </View>
        <View style={styles.arrowGroup}>
          <TouchableOpacity>
            <View style={styles.arrowButton}>
              <BackIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.arrowButton}>
              <ForwardIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <Text style={{ fontFamily: 'Genos', fontSize: 20, }}>Done</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  status: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  arrowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 120,
  },
  arrowButton: {
    backgroundColor: 'whtie',
    borderRadius: 10,
    padding: 8,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
})

export default FooterHeader;