import CartItem from '@/components/CartItem';
import { IconButton } from '@/components/ui/Button';
import { Body, Subtitle, Title } from '@/components/ui/Text';
import { AppDispatch, RootState } from '@/redux/store';
import { formatCurrency } from '@/utils/utilities';
import { useTheme } from '@react-navigation/native';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { useDispatch, useSelector } from 'react-redux';

export default function CartScreen() {
    const {
        colors: { border, card, primary, text, background },
    } = useTheme();

    const dispatch = useDispatch<AppDispatch>();
    const cartStore = useSelector((state: RootState) => state.cart);

    return (
        <View className="flex-1">
            <FlatList
                className="flex-1 p-4"
                data={cartStore.products}
                renderItem={({ item }) => <CartItem data={item} />}
                fadingEdgeLength={60}
                ListHeaderComponent={
                    <Body>
                        You have{' '}
                        <Text style={{ color: primary }}>
                            {cartStore.products.length} items{' '}
                        </Text>
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
                            cartStore.products.reduce(
                                (total, item) =>
                                    total + item.price * item.quantity,
                                0,
                            ),
                        )}
                    </Text>
                </Body>
                <RectButton
                    rippleColor={border}
                    style={[
                        {
                            backgroundColor: text,
                        },
                        styles.checkoutBtn,
                    ]}
                >
                    <Iconify
                        color={background}
                        icon="tabler:shopping-cart-plus"
                        size={20}
                    />
                    <Body>
                        <Text className="text-white dark:text-black">
                            Checkout
                        </Text>
                    </Body>
                </RectButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    checkoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'center',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 50,
    },
});
