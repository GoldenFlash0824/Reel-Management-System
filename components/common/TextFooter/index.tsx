import { Dimensions, View, ScrollView, StyleSheet } from 'react-native';
import { SetStateAction, useState } from 'react';

import { useContent } from '@/app/(cards)/_layout';
import FooterHeader from '@/components/common/TextFooter/FooterHeader';
import FooterSelector from '@/components/common/TextFooter/FooterSelector';
import BackIcon from '@/assets/images/SVG/Ads_section/Back.svg';
import FontIcon from '@/assets/images/SVG/Ads_section/Font.svg';
import HighIcon from '@/assets/images/SVG/Ads_section/High.svg';
import SpaceIcon from '@/assets/images/SVG/Ads_section/Space.svg';
import LiningIcon from '@/assets/images/SVG/Ads_section/Lining.svg';
import SizeIcon from '@/assets/images/SVG/Ads_section/Size.svg';
import ColorIcon from '@/assets/images/SVG/Ads_section/Color.svg';
import FontBody from './FontBody';
import FooterBody from './FooterBody';

const { width, height } = Dimensions.get('window');

const footers = [
  {
    icon: <BackIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Back'
  },
  {
    icon: <FontIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Font'
  },
  {
    icon: <HighIcon width={width * 0.07} height={width * 0.07} />,
    content: 'High'
  },
  {
    icon: <SpaceIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Space'
  },
  {
    icon: <LiningIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Lining'
  },
  {
    icon: <SizeIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Size'
  },
  {
    icon: <ColorIcon width={width * 0.07} height={width * 0.07} />,
    content: 'Color'
  },
];

const Footer = ({ content, setContent }: {
  content: string,
  setContent: React.Dispatch<SetStateAction<string>>
}) => {
  const { selectedTextSelector, setSelectedTextSelector, setFooter, textContent, setTextContent } = useContent();
  const [icon, setIcon] = useState<React.ReactNode>(<FontIcon />);

  const handleClick = (footer: { icon: React.ReactNode, content: string }) => {
    setIcon(footer?.icon);
    setTextContent(footer?.content);
    setSelectedTextSelector(footer?.content);
    if (footer?.content === 'Back') {
      setFooter('effect');
    }
  }

  return (
    <View style={styles.container}>
      <FooterHeader icon={icon} content={textContent} />
      <FooterBody content={textContent} />
      <View style={styles.scrollParent}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {footers?.map((footer, index) => (
            <FooterSelector key={index} icon={footer?.icon} content={footer?.content} selectedSelector={selectedTextSelector} handleClick={() => { handleClick(footer) }} />
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: height * 0.02
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