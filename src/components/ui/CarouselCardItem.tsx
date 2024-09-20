import { blurhash } from '@/constants/Strings';
import { useTheme } from '@react-navigation/native';
import { useRef } from 'react';
import { View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

interface CarouselCardItemProps {
  images: string[];
}

export default function CarouselCardItem({ images }: CarouselCardItemProps) {
  const pagerRef = useRef<PagerView>(null);
  const { colors } = useTheme();

  return (
    <View className="relative flex-1 bg-white">
      <PagerView
        scrollEnabled
        style={{ flex: 1 }}
        initialPage={0}
        ref={pagerRef}
      >
        {images.map((uri, index) => {
          return (
            <Image
              className={`flex-1 bg-[${colors.border}] `}
              source={{ uri }}
              resizeMode="center"
              key={index}
            />
          );
        })}
      </PagerView>
    </View>
  );
}
