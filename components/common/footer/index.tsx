import { ScrollView, StyleSheet, Text, View } from "react-native";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>Media</Text>
      </View>
      <View style={styles.scrollParent}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {children}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statusBar: {
    paddingHorizontal: 25
  },
  statusText: {
    fontFamily: 'Genos'
  },
  scrollParent: {
    width: '100%',
    height: 130,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 10,
  },
})

export default Footer;