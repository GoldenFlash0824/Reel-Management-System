import { SetStateAction } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import FooterHeader from '@/components/common/EffectFooter/FooterHeader';
import FooterBody from "@/components/common/EffectFooter/FooterBody";
import FooterSelector from '@/components/common/EffectFooter/FooterSelector';
import MediaIcon from '@/assets/images/SVG/Stories_section/Media.svg';
import MusicIcon from '@/assets/images/SVG/Stories_section/Music.svg';
import TextIcon from '@/assets/images/SVG/Stories_section/Text.svg';
import EffectIcon from '@/assets/images/SVG/Stories_section/Effects.svg';
import StickerIcon from '@/assets/images/SVG/Stories_section/Sticker.svg';
import BackSideIcon from '@/assets/images/SVG/Stories_section/backside.svg';
import MediaStatusIcon from '@/assets/images/SVG/Stories_section/Media_status.svg';
import MusicStatusIcon from '@/assets/images/SVG/Stories_section/Music_status.svg';
import TextStatusIcon from '@/assets/images/SVG/Stories_section/Text_status.svg';
import EffectStatusIcon from '@/assets/images/SVG/Stories_section/Effects_status.svg';
import StickerStatusIcon from '@/assets/images/SVG/Stories_section/Sticker_status.svg';
import BackSideStatusIcon from '@/assets/images/SVG/Stories_section/backside_status.svg';
import { useContent } from "@/app/(cards)/_layout";

const { width, height } = Dimensions.get('window');

const footers = [
  {
    icon: <MediaIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <MediaStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Media'
  },
  {
    icon: <MusicIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <MusicStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Music'
  },
  {
    icon: <TextIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <TextStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Text'
  },
  {
    icon: <EffectIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <EffectStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Effect'
  },
  {
    icon: <StickerIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <StickerStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Sticker'
  },
  {
    icon: <BackSideIcon width={width * 0.07} height={width * 0.07} />,
    statusIcon: <BackSideStatusIcon width={width * 0.05} height={width * 0.05} />,
    content: 'Backside'
  },
];

const Footer = ({ content, setContent, icon, setIcon, statusIcon, setStatusIcon }:
  {
    content: string,
    setContent: React.Dispatch<SetStateAction<string>>,
    icon: React.ReactNode,
    setIcon: React.Dispatch<SetStateAction<React.ReactNode>>,
    statusIcon: React.ReactNode,
    setStatusIcon: React.Dispatch<SetStateAction<React.ReactNode>>
  }) => {

  const { selectedSelector, setSelectedSelector, setSelectedTextSelector, setFooter, setTextContent } = useContent();

  const handleClick = (footer: { icon: React.ReactNode, statusIcon: React.ReactNode, content: string }) => {
    setIcon(footer?.icon);
    setStatusIcon(footer?.statusIcon);
    setContent(footer?.content);
    setSelectedSelector(footer?.content);
    if (footer?.content === 'Text') {
      setFooter('text');
      setTextContent('Font');
      setSelectedTextSelector('Font');
    }
  }

  return (
    <View style={[styles.container, content === '' ? styles.containerEmpty : styles.containerNotEmpty]}>
      {content !== '' && <FooterHeader content={content} statusIcon={statusIcon} />}
      <FooterBody content={content} />
      <View style={styles.scrollParent}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {footers?.map((footer, index) => (
            <FooterSelector key={index} icon={footer?.icon} itemContent={footer?.content} selectedSelector={selectedSelector} handleClick={() => { handleClick(footer) }} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: height * 0.02
  },
  containerEmpty: {
    backgroundColor: '#000000',
    paddingTop: height * 0.02
  },
  containerNotEmpty: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scrollParent: {
    width: '100%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 10,
  },
})

export default Footer;