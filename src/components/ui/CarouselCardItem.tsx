import { blurhash } from "@/constants/Strings";
import { Image } from "expo-image";
import { useRef } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

interface CarouselCardItemProps {
  images: string[];
}

export default function CarouselCardItem({ images }: CarouselCardItemProps) {
  const pagerRef = useRef<PagerView>(null);

  return (
    <View className="relative flex-1 bg-white">
      <PagerView
        scrollEnabled
        style={{ flex: 1 }}
        initialPage={0}
        ref={pagerRef}
      >
        {images.map((val) => {
          return (
            <Image
              className="flex-1 w-full h-full "
              source={val}
              placeholder={{ blurhash: blurhash }}
              contentFit="cover"
              transition={1000}
              key={val}
            />
          );
        })}
      </PagerView>
    </View>
  );
}
