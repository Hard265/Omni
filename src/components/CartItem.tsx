import { formatCurrency } from '@/utils/utilities';
import { Image, Text, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { Title, Body } from './ui/Text';
import { useTheme } from '@react-navigation/native';
import {
    cartActions,
    CartItem as CartItemType,
} from '@/redux/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

interface CartItemProps {
    data: CartItemType;
}

export default function CartItem({ data }: CartItemProps) {
    const {
        colors: { text, border, card },
    } = useTheme();
    const dispatch = useDispatch<AppDispatch>();

    const increasingQuantity = () => {
        dispatch(cartActions.add({ ...data, quantity: 1 }));
    };

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
                source={{ uri: data.thumbnail }}
                className="aspect-square rounded-l-lg bg-white"
                resizeMode="center"
            />
            <View className="flex-1 py-2">
                <Title numberOfLines={1} ellipsizeMode="middle">
                    {data.title}
                </Title>
                <Body>Wooden dresser</Body>
                <View className="mt-2 flex-row items-center justify-between">
                    <Body>
                        <Text
                            style={{ fontFamily: 'FatFace' }}
                            className="text-lg"
                        >
                            <Text className="text-base">MK </Text>
                            {formatCurrency(data.price)}
                        </Text>
                    </Body>
                    <View className="h-7 w-7 rounded-full bg-green-500" />
                </View>
            </View>
            <View className="flex-col items-center justify-between p-2">
                <Iconify
                    onPress={increasingQuantity}
                    icon="feather:plus-circle"
                    size={24}
                    color={'white'}
                />
                <Body>{data.quantity}</Body>
                <Iconify
                    icon="feather:minus-circle"
                    size={24}
                    color={'white'}
                />
            </View>
        </View>
    );
}
