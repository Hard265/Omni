import { blurhash } from '@/constants/Strings';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

interface CarouselCardItemProps {
  images: string[];
}

export default function CarouselCardItem({ images }: CarouselCardItemProps) {
  const pagerRef = useRef<PagerView>(null);
  const { colors } = useTheme();

  return (
    <View className={`relative flex-1 bg-[${colors.card}]`}>
      <PagerView
        scrollEnabled
        style={{ flex: 1, height: 80, width: 100}}
        initialPage={0}
        ref={pagerRef}
      >
        {images.map((val, index) => {
          return (
            <Image
              className="h-24 w-24 flex-1"
              source="https://i.pinimg.com/236x/f2/2b/1c/f22b1c80808ed24a9f900d3c8db1cf7c.jpg"
              placeholder={{ blurhash: blurhash }}
              contentFit="cover"
              transition={1000}
              key={index}
            />
          );
        })}
      </PagerView>
    </View>
  );
}
