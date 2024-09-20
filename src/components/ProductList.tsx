import CarouselCardItem from '@/components/ui/CarouselCardItem';
import { blurhash } from '@/constants/Strings';
import { fetchProducts } from '@/redux/actions/productActions';
import { Product } from '@/redux/reducers/productReducer';
import { AppDispatch, RootState } from '@/redux/store';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  SectionList,
  SectionListData,
  SectionListProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface ProductListProps {
  onScroll:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}

export default function ProductList({ onScroll }: ProductListProps) {
  const {
    colors: { primary, background },
  } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.product.products);

  React.useEffect(() => {
    // dispatch(fetchProducts());
  }, []);

  const sections = products.map((product) => ({
    data: [product],
    title: product.name,
  }));

  const categories = [
    {
      id: '1',
      title: 'Outdoors',
      thumbnail: 'https://picsum.photos/seed/696/150/150',
    },
    {
      id: '2',
      title: 'Outdoors',
      thumbnail: 'https://picsum.photos/seed/696/150/150',
    },
  ];

  return (
    <>
      <SectionList
        sections={sections}
        onScroll={onScroll}
        ListHeaderComponent={
          <View className="p-4">
            <View className="mb-2 flex flex-row items-center justify-between">
              <Text className="text-lg text-black dark:text-white">
                special offers
              </Text>
              <Text className="" style={{ color: primary }}>
                see all
              </Text>
            </View>
            <View className="aspect-video w-full rounded-md bg-gray-500/25">
              <CarouselCardItem
                images={[
                  'https://picsum.photos/seed/696/150/150',
                  'https://picsum.photos/seed/696/150/150',
                  'https://picsum.photos/seed/696/150/150',
                ]}
              />
            </View>
            <View className="mb-2 flex flex-row items-center justify-between">
              <Text className="text-lg text-black dark:text-white">
                categories
              </Text>
              <Text className="" style={{ color: primary }}>
                see all
              </Text>
            </View>
            <ScrollView horizontal>
              {categories.map(({ thumbnail, title, id }) => (
                <TouchableOpacity
                  className="flex flex-col items-center justify-center gap-4"
                  key={id}
                >
                  <Image
                    className="flex-1 rounded-full bg-gray-500/25"
                    source={thumbnail}
                    placeholder={{ blurhash }}
                    contentFit="cover"
                    transition={1000}
                  />
                  <Text>{title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
        ListFooterComponent={<View className="p-4" />}
        renderSectionHeader={({ section }) => (
          <View className="flex-row items-center justify-between">
            <Text>{section.title}</Text>
            <Text className="" style={{ color: primary }}>
              see all
            </Text>
          </View>
        )}
        renderItem={({ item: { id, image, price } }) => {
          return (
            <Pressable
              onPress={() => {
                //@ts-ignore
                navigation.navigate('ItemModal', {
                  params: {
                    id,
                  },
                });
              }}
              className="aspect-square w-[50%] rounded-md shadow-md"
            >
              <Image
                className="w-full flex-1 bg-gray-500/25"
                source={image[0]}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View className="p-4" style={{ backgroundColor: background }}>
                <Text className="">
                  <Text>k</Text>
                  <Text>{price}</Text>
                  <Text>.00</Text>
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </>
  );
}
