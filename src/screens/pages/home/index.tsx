import Carousel from '@/components/ui/Carousel';
import { Body, Heading } from '@/components/ui/Text';
import { fetchProducts } from '@/redux/actions/productActions';
import { Product } from '@/redux/reducers/productReducer';
import { AppDispatch, RootState } from '@/redux/store';
import { RootStackParamList } from '@/types/navigation';
import { formatCurrency } from '@/utils/utilities';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Link, useNavigation, useTheme } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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
    data: Product[][];
  }[] = _(products)
    .groupBy((item) => item.category)
    .map((items, category) => ({ title: category, data: [items] }))
    .value();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleRefresh = () => {
    dispatch(fetchProducts());
  };

  return (
    <View className="flex-1">
      <SectionList
        className="my-2 flex-1"
        sections={grouped}
        // onRefresh={handleRefresh}
        renderSectionHeader={({ section }) => {
          return (
            <View className="flex-row items-center justify-between p-4">
              <Heading>{section.title}</Heading>
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
                      <Body
                        numberOfLines={1}
                        ellipsizeMode="middle"
                      >
                        {product.title}
                      </Body>
                      <Text
                        style={{ color: colors.text, fontFamily: 'FatFace' }}
                        className="text-xl"
                      >
                        <Text className="text-lg">MK </Text>
                        {formatCurrency(product.price * 800)}
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
              <Carousel
                images={[
                  'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                  'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                ]}
              />
            </View>
            <View className="flex-row items-center justify-between p-2 py-3">
              <Heading>
                categories
              </Heading>
              <Text
                style={{ color: colors.primary }}
                className="text-xl font-bold"
              >
                see all
              </Text>
            </View>
            <ScrollView horizontal className="p-2">
              {Array(10)
                .fill({
                  id: 1,
                  title: 'perfume',
                  thumbnail:
                    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                })
                .map((item, i) => ({ ...item, id: i }))
                .map((item) => (
                  <Pressable
                    className="m-3 flex-col items-center gap-3"
                    key={item.id}
                  >
                    <Image
                      source={{ uri: item.thumbnail }}
                      className="h-14 w-14 rounded-full bg-white"
                      resizeMode="center"
                    />
                    <Text
                      style={{ color: colors.text }}
                      className="text-base font-medium capitalize"
                    >
                      {item.title}
                    </Text>
                  </Pressable>
                ))}
            </ScrollView>
          </View>
        }
      />
    </View>
  );
}
