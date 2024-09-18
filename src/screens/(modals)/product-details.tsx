import * as React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { Button, IconButton } from '@/components/ui/Button';
import CarouselCardItem from '@/components/ui/CarouselCardItem';

export default function ProductDetailsScreen() {
  const {
    colors: { background, text },
  } = useTheme();
  return (
    <View className="flex-1" style={{ backgroundColor: background }}>
      <CarouselCardItem
        images={[
          'https://picsum.photos/seed/696/3000/2000',
          'https://picsum.photos/seed/696/3000/2000',
        ]}
      />
      <View className="p-4">
        <Text className="text-2xl font-bold">Item name</Text>
        <Text className="text-2xl font-bold">
          <Text className="text-lg font-normal">K</Text>415.00
        </Text>
      </View>
      <View>
        <Text className="text-xl font-semibold">Description</Text>
        <Text className="text-gray-500">Description</Text>
      </View>
      <View>
        <Text className="text-xl font-semibold">Colors</Text>
        <View className="flex-row gap-2"></View>
      </View>
      <View className="flex-row items-center justify-between gap-4">
        <View className="flex-row gap-2 rounded-md border shadow-md">
          <IconButton onTap={() => {}}>
            <Iconify icon="feather:plus" size={24} color={text} />
          </IconButton>
          <Text>3</Text>
          <IconButton onTap={() => {}}>
            <Iconify icon="feather:plus" size={24} color={text} />
          </IconButton>
        </View>
        <Button onTap={() => {}}>Add to cart</Button>
      </View>
    </View>
  );
}
