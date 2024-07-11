import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AllowAccessIcon from '@/assets/images/SVG/Stories_section/Allow access.svg'

const FooterBody = ({ content }: {
  content: string
}) => {
  return (
    <View style={styles.container}>
      {content === 'Media' && <View style={styles.media}>
        <AllowAccessIcon />
        <TouchableOpacity>
          <View style={styles.btnArea}>
            <Text style={{ color: 'white' }}>Allow access</Text>
          </View>
        </TouchableOpacity>
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },
  btnArea: {
    backgroundColor: '#1BC469',
    marginTop: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10
  }
})

export default FooterBody;