import { blurhash } from '@/constants/Strings';
import { useTheme } from '@react-navigation/native';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { View, Image, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const pagerRef = useRef<PagerView>(null);
  const { colors } = useTheme();
  const [page, setPage] = React.useState(0);
  return (
    <View className="relative flex-1 bg-white">
      <PagerView
        scrollEnabled
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => {
          setPage(e.nativeEvent.position);
        }}
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
      <View className="absolute bottom-2 justify-center left-0 right-0 flex-row items-center gap-2">
        {images.map((_, index) => (
          <View
            className={clsx(
              `h-2.5 w-4 rounded-full bg-black/50`,
              page === index && 'w-8 bg-black',
            )}
            key={index}
          ></View>
        ))}
      </View>
    </View>
  );
}
