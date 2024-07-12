import { StyleSheet, View } from "react-native";
import FontBody from "@/components/common/TextFooter/FontBody";
import HighBody from "@/components/common/TextFooter/HighBody";
import SpaceBody from "@/components/common/TextFooter/SpaceBody";
import SizeBody from "@/components/common/TextFooter/SizeBody";
import LiningBody from "@/components/common/TextFooter/LiningBody";
import ColorBody from "@/components/common/TextFooter/ColorBody";

const FooterBody = ({ content }: { content: string }) => {
  return (
    <View style={styles.container}>
      {content === 'Font' && <FontBody />}
      {content === 'High' && <HighBody />}
      {content === 'Lining' && <LiningBody />}
      {content === 'Space' && <SpaceBody />}
      {content === 'Size' && <SizeBody />}
      {content === 'Color' && <ColorBody />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

export default FooterBody;