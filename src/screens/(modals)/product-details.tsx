import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { Button, IconButton } from '@/components/ui/Button';
import CarouselCardItem from '@/components/ui/CarouselCardItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import _ from 'lodash';
import { RectButton } from 'react-native-gesture-handler';

export default function ProductDetailsScreen(props: any) {
  const { colors } = useTheme();
  const [inputs, setInputs] = React.useState({ quantity: 0 });
  const products = useSelector((state: RootState) => state.product.products);

  const product = _(products).find({
    id: parseInt(props.route.params.productId),
  });

  if (!product) {
    return (
      <View>
        <Text className="dark:text-white">Not found</Text>
      </View>
    );
  }

  const quantity = {
    reduce() {
      setInputs({ ...inputs, quantity: inputs.quantity - 1 });
    },
    increase() {
      setInputs({ ...inputs, quantity: inputs.quantity + 1 });
    },
    current: inputs.quantity + product.minimumOrderQuantity,
    disableIncrease:
      inputs.quantity + product.minimumOrderQuantity < product.stock,
    disableReduce:
      inputs.quantity + product.minimumOrderQuantity >
      product.minimumOrderQuantity,
  };

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <CarouselCardItem images={product.images} />
      <ScrollView className="max-h-[40%] p-2 pb-4">
        <View className="mb-6 flex-col gap-1">
          <Text style={{ color: colors.text }} className="text-2xl font-bold">
            {product.title}
          </Text>
          <View className="flex-row items-center justify-between">
            <Text
              style={{ color: colors.text }}
              className="font-serif text-xl font-bold"
            >
              <Text className="text-lg">MK </Text>
              {product.price * 800}
            </Text>
            <View className="flex-row items-center gap-2">
              <Iconify icon="feather:star" size={18} color={colors.text} />
              <Text
                style={{ color: colors.text }}
                className="text-lg font-bold"
              >
                {product.rating}
              </Text>
              <Iconify
                icon="radix-icons:divider-vertical"
                size={18}
                color={colors.text}
              />
              <Text
                style={{ color: colors.primary }}
                className="text-lg font-semibold"
              >
                {product.reviews.length} Reviews
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-3 flex-col gap-1">
          <Text
            style={{ color: colors.text }}
            className="text-xl font-semibold"
          >
            Description
          </Text>
          <Text style={{ color: colors.text }} className="text-base opacity-75">
            {product.description}
          </Text>
        </View>
        <View className="mb-3">
          <Text
            style={{ color: colors.text }}
            className="text-xl font-semibold"
          >
            Tags
          </Text>
          <Text style={{ color: colors.text }} className="text-base opacity-75">
            {product.tags.join(', ')}
          </Text>
        </View>
        <View>
          <Text
            style={{ color: colors.text }}
            className="text-xl font-semibold"
          >
            Colors
          </Text>
          <View className="flex-row gap-2"></View>
        </View>
      </ScrollView>
      <View
        style={{ borderColor: colors.border }}
        className="flex-row items-center justify-between gap-4 border-t p-4"
      >
        <View
          style={{ borderColor: colors.border }}
          className="flex-row items-center gap-2 rounded-full border-2 shadow-md"
        >
          <RectButton
            onPress={quantity.reduce}
            enabled={quantity.disableReduce}
            style={{ padding: 12 }}
          >
            <Iconify icon="tabler:minus" size={24} color={colors.text} />
          </RectButton>

          <Text style={{ color: colors.text }} className="text-lg">
            {quantity.current}
          </Text>
          <RectButton
            onPress={quantity.increase}
            enabled={quantity.disableIncrease}
            style={{ padding: 12 }}
          >
            <Iconify icon="tabler:plus" size={24} color={colors.text} />
          </RectButton>
        </View>
        <RectButton
          rippleColor={colors.border}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            backgroundColor: colors.text,
            padding: 12,
            paddingHorizontal: 24,
            borderRadius: 50,
          }}
        >
          <Iconify
            color={colors.background}
            icon="tabler:shopping-cart-plus"
            size={20}
          />
          <Text className="font-medium text-white dark:text-black">
            Add to cart
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
