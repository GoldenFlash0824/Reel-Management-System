import { View, StyleSheet } from "react-native";

import MediaBody from "@/components/common/EffectFooter/MediaBody";
import MusicBody from "@/components/common/EffectFooter/MusicBody";
import EffectBody from "@/components/common/EffectFooter/EffectBody";
import StickerBody from "@/components/common/EffectFooter/StickerBody";
import BackSideBody from "@/components/common/EffectFooter/BackSideBody";

const FooterBody = ({ content }: {
  content: string,
}) => {
  return (
    <View style={styles.container}>
      {content === 'Media' && <MediaBody />}
      {content === 'Music' && <MusicBody />}
      {content === 'Effect' && <EffectBody />}
      {content === 'Sticker' && <StickerBody />}
      {content === 'Backside' && <BackSideBody />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

export default FooterBody;