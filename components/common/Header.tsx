import { StyleSheet, View, Platform, StatusBar, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const Header = ({ children, style }: { children: React.ReactNode, style?: object }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Header;