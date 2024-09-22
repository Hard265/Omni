import { IconButton } from '@/components/ui/Button';
import { Body, Subtitle, Title } from '@/components/ui/Text';
import { AppDispatch, RootState } from '@/redux/store';
import { formatCurrency } from '@/utils/utilities';
import { useTheme } from '@react-navigation/native';
import { View, Text, FlatList, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { useDispatch, useSelector } from 'react-redux';
import colors from 'tailwindcss/colors';

export default function CartScreen() {
  const {
    colors: { border, card, primary, text, background },
  } = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const renderItem = ({ item }: { item: (typeof cartItems)[0] }) => {
    return (
      <View
        style={{
          borderColor: border,
          backgroundColor: card,
          shadowColor: border,
        }}
        className="relative mb-1 flex-row gap-2 rounded-lg border shadow"
      >
        <Image
          source={{ uri: item.image }}
          className="aspect-square rounded-l-lg bg-white"
          resizeMode="center"
        />
        <View className="flex-1 py-2">
          <Title numberOfLines={1} ellipsizeMode="middle">
            {item.title}
          </Title>
          <Body>Wooden dresser</Body>
          <View className="mt-2 flex-row items-center justify-between">
            <Body>
              <Text style={{ fontFamily: 'FatFace' }} className="text-lg">
                <Text className="text-base">MK </Text>
                {formatCurrency(item.price)}
              </Text>
            </Body>
            <View className="h-7 w-7 rounded-full bg-green-500" />
          </View>
        </View>
        <View className="flex-col items-center justify-between p-2">
          <Iconify icon="feather:plus-circle" size={24} color={'white'} />
          <Body>{item.quantity}</Body>
          <Iconify icon="feather:minus-circle" size={24} color={'white'} />
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        className="flex-1 p-4"
        data={cartItems}
        renderItem={renderItem}
        fadingEdgeLength={60}
        ListHeaderComponent={
          <Body>
            You have{' '}
            <Text style={{ color: primary }}>{cartItems.length} items </Text>
            in your cart
          </Body>
        }
        ListHeaderComponentClassName="mb-2"
      />
      <View
        style={{ borderColor: border, backgroundColor: card }}
        className="flex-row items-center justify-between gap-4 border-t p-4"
      >
        <Body>
          <Text style={{ fontFamily: 'FatFace' }} className="text-lg">
            <Text className="text-base">MK </Text>
            {formatCurrency(
              cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
              ),
            )}
          </Text>
        </Body>
        <RectButton
          rippleColor={border}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            backgroundColor: text,
            padding: 12,
            paddingHorizontal: 16,
            borderRadius: 50,
          }}
        >
          <Iconify
            color={background}
            icon="tabler:shopping-cart-plus"
            size={20}
          />
          <Body>
            <Text className="text-white dark:text-black">Checkout</Text>
          </Body>
        </RectButton>
      </View>
    </View>
  );
}
