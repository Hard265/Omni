import ReviewItem from '@/components/ReviewItem';
import { RootState } from '@/redux/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import _ from 'lodash';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function ReviewsScreen(props: any) {
  const navigation = useNavigation();
  const products = useSelector((state: RootState) => state.product.products);

  const product = _(products).find({
    id: parseInt(props.route.params.productId),
  });

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: ({ ...props }) => {
        return (
          <View className="flex-row items-center gap-2">
            <Image
              source={{ uri: product?.thumbnail }}
              className='h-10 w-10 rounded-md bg-white'
            />
            <View className='flex-1 relative flex-col'>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  width: '70%',
                  color: props.tintColor,
                }}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {product?.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: props.tintColor,
                }}
              >
                Ratings and Reviews
              </Text>
            </View>
          </View>
        );
      },
    });
  }, []);

  if (!product) {
    return null;
  }

  return (
    <FlatList
      data={product.reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
}
