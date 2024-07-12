import { StyleSheet, Text, View } from "react-native";
import DotIcon from '@/assets/images/SVG/dot.svg'
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const FooterHeader = ({ statusIcon, content }:
  {
    statusIcon: React.ReactNode,
    content: string
  }) => {

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={styles.textGroup}>
          <DotIcon style={{ marginRight: 5 }} />
          <View>
            {statusIcon}
          </View>
          <DotIcon style={{ marginLeft: 5 }} />
          <Text style={{ fontFamily: 'Genos', fontSize: 20, color: '#333333', marginLeft: 15 }}>{content}</Text>
          <DotIcon style={{ marginLeft: 15 }} />
        </View>
        {content !== 'Media' && <TouchableOpacity onPress={() => {
          router.push("/preview")
        }}>
          <View style={styles.button}>
            <Text style={{ fontFamily: 'Genos', fontSize: 20, }}>Done</Text>
          </View>
        </TouchableOpacity>}
      </View>
      <View style={styles.divider} />
    </View >
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
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10
  }
})

export default FooterHeader;