import ProductList from '@/components/ProductList';
import {
  View,
  FlatList,
  Text,
  Image,
  SectionList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { Link, useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { fetchProducts } from '@/redux/actions/productActions';
import _ from 'lodash';
import { RootStackParamList } from '@/types/navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type HomeScreenProps = BottomTabNavigationProp<
  RootStackParamList,
  'RootSidebarNavigator'
>;

export default function HomeScreen({ navigate }: HomeScreenProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const grouped: {
    title: string;
    data: Product[][]
  }[] = _(products)
    .groupBy((item) => item.category)
    .map((items, category) => ({ title: category, data: [items] }))
    .value();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View className="flex-1">
      <SectionList
        className="my-2 flex-1"
        sections={grouped}
        renderSectionHeader={({ section }) => {
          return (
            <View className="flex-row items-center justify-between p-4">
              <Text
                style={{ color: colors.text }}
                className="text-2xl font-semibold capitalize"
              >
                {section.title}
              </Text>
              <Link to={{ screen: 'ProductDetails', params: { productId: 1 } }}>
                <Text
                  style={{ color: colors.primary }}
                  className="text-xl font-medium"
                >
                  see all
                </Text>
              </Link>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <FlatList
              horizontal
              data={item}
              className="px-2"
              contentContainerStyle={{ gap: 8 }}
              renderItem={({ item: product }) => {
                return (
                  <Pressable
                    onPress={() => {
                      //@ts-ignore
                      navigation.navigate('ProductDetails', {
                        productId: product.id,
                      });
                    }}
                    style={{ borderColor: colors.border }}
                    className="aspect-[17/18] h-64 flex-col rounded-lg border"
                  >
                    <Image
                      source={{
                        uri: product.images[0],
                      }}
                      className="flex-1 rounded-t-lg bg-white"
                      resizeMode="center"
                      resizeMethod="scale"
                    />
                    <View className="flex-col gap-2 p-2">
                      <Text style={{ color: colors.text }}>
                        {product.title}
                      </Text>
                      <Text
                        style={{ color: colors.text }}
                        className="font-serif text-xl font-bold"
                      >
                        <Text className="text-lg">MK </Text>
                        {product.price * 800}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
          );
        }}
        ListHeaderComponent={
          <View>
            <View className="h-64">
              <Image
                source={{
                  uri: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                }}
                className="flex-1 rounded-lg bg-white"
                resizeMode="center"
              />
            </View>
            <View className='p-2 flex-row gap-4 justisy-start flex-wrap'>
              {
                [].map((item)=>(
                  <Pressable className='flex-col gap-1 items-center' key={ item.id }>
                    <Image 
                      source={{uri: item.thumbnail}} 
                      className="rounded-full h-12 w-12"
                      resizeMode='center'
                    />
                    <Text style={{ color: colors.text }}>{item.title}</Text>
                  </Pressable>
                ))
              }
            </View>
          </View>
        }
      />
    </View>
  );
}
