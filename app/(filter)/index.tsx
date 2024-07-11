import { ImageBackground, View } from "react-native"
import FooterBackIcon from '@/assets/images/SVG/image_filter/Footer_back.svg';
import FooterForwardIcon from '@/assets/images/SVG/image_filter/Footer _forwrd.svg';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('@/assets/images/PNG/selfie.png')} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 30 }}>
          <FooterBackIcon width={40} height={40} />
          <FooterForwardIcon width={40} height={40} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 15, paddingBottom: 25 }}>
          <View style={{ backgroundColor: 'white', borderRadius: 15, width: 30, height: 30 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 20, width: 40, height: 40 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 25, width: 50, height: 50 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 40, width: 80, height: 80, borderColor: '#555', borderWidth: 8 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 25, width: 50, height: 50 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 20, width: 40, height: 40 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 15, width: 30, height: 30 }} />
        </View>
      </ImageBackground>
    </View>
  )
}