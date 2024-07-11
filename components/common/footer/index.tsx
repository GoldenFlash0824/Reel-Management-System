import { SetStateAction } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import FooterHeader from '@/components/common/footer/FooterHeader';
import FooterBody from "@/components/common/footer/FooterBody";
import FooterSelector from '@/components/common/footer/FooterSelector';
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


const footers = [
  {
    icon: <MediaIcon />,
    statusIcon: <MediaStatusIcon />,
    content: 'Media'
  },
  {
    icon: <MusicIcon />,
    statusIcon: <MusicStatusIcon />,
    content: 'Music'
  },
  {
    icon: <TextIcon />,
    statusIcon: <TextStatusIcon />,
    content: 'Text'
  },
  {
    icon: <EffectIcon />,
    statusIcon: <EffectStatusIcon />,
    content: 'Effect'
  },
  {
    icon: <StickerIcon />,
    statusIcon: <StickerStatusIcon />,
    content: 'Sticker'
  },
  {
    icon: <BackSideIcon />,
    statusIcon: <BackSideStatusIcon />,
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

  const handleClick = (footer: { icon: React.ReactNode, statusIcon: React.ReactNode, content: string }) => {
    setIcon(footer?.icon);
    setStatusIcon(footer?.statusIcon);
    setContent(footer?.content);
  }

  return (
    <View style={styles.container}>
      <FooterHeader content={content} statusIcon={statusIcon} />
      <FooterBody content={content} />
      <View style={styles.scrollParent}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {footers?.map((footer, index) => (
            <FooterSelector key={index} icon={footer?.icon} content={footer?.content} handleClick={() => { handleClick(footer) }} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'column'
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