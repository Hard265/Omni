import ProductList from '@/components/ProductList';
import HomeAppBar from '@/components/HomeAppBar';
import {
  View,
  Animated,
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import _ from 'lodash';
import { RootStackParamList } from '@/types/navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type HomeScreenProps = BottomTabNavigationProp<
  RootStackParamList,
  'RootSidebarNavigator'
>;

export default function HomeScreen({ navigate }: HomeScreenProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 72],
    outputRange: [0, -78 - insets.top],
  });

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const grouped = _(products)
    .groupBy((item) => item.category)
    .map((items, category) => ({ title: category, data: [items] }))
    .value();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View className="flex-1">
      {/* <Animated.View
        className="absolute left-0 right-0 top-0 z-10 w-full flex-row items-end px-4 py-2"
        style={{
          backgroundColor: colors.card,
          transform: [{ translateY: translateY }],
          height: insets.top + 64,
        }}
      >
        <Text className='text-'>Omni</Text>
      </Animated.View> */}

      <SectionList
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
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
              className="px-4"
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
                    className="aspect-[16/18] h-64 flex-col rounded-lg border"
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
            <View className="h-56 p-4">
              <Image
                source={{
                  uri: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                }}
                className="flex-1 rounded-lg bg-white"
                resizeMode="center"
              />
            </View>
          </View>
        }
      />
    </View>
  );
}
