import { StyleSheet, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Footer = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.08,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
  },
});

export default Footer;