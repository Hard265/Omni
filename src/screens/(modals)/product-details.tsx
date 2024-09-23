import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { Button, IconButton } from '@/components/ui/Button';
import CarouselCardItem from '@/components/ui/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import _ from 'lodash';
import { RectButton } from 'react-native-gesture-handler';
import { formatCurrency } from '@/utils/utilities';
import { Body, Heading, Subtitle, Title } from '@/components/ui/Text';
import { cartActions } from '@/redux/reducers/cartReducer';
import { pushToCart } from '@/redux/actions/cartActions';

export default function ProductDetailsScreen(props: any) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [inputs, setInputs] = React.useState({ quantity: 0 });
    const dispatch = useDispatch<AppDispatch>();

    const productStore = useSelector((state: RootState) => state.product);

    const product = _(productStore.products).find({
        id: parseInt(props.route.params.productId),
    });

    if (!product) {
        return (
            <View>
                <Text className="dark:text-white">Not found</Text>
            </View>
        );
    }
    const handleAddToCart = () => {
        pushToCart({
            productId: product.id.toString(),
            quantity: quantity.current + product.minimumOrderQuantity,
        });
    };

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
            <ScrollView className="max-h-[40%] p-2 pb-4" fadingEdgeLength={20}>
                <View className="mb-6 flex-col gap-3">
                    <Heading>{product.title}</Heading>
                    <View className="flex-row items-center justify-between">
                        <Text
                            style={{
                                color: colors.text,
                                fontFamily: 'FatFace',
                            }}
                            className="text-xl"
                        >
                            <Text className="text-lg">MK </Text>
                            {formatCurrency(product.price * 800)}
                        </Text>
                        <View className="flex-row items-center gap-2">
                            <Iconify
                                icon="feather:star"
                                size={18}
                                color={colors.text}
                            />
                            <Body>{product.rating}</Body>
                            <Iconify
                                icon="radix-icons:divider-vertical"
                                size={18}
                                color={colors.text}
                            />
                            <Text
                                style={{ color: colors.primary }}
                                className="font-semibold"
                                onPress={() => {
                                    //@ts-ignore
                                    navigation.navigate('Reviews', {
                                        productId: product.id,
                                    });
                                }}
                            >
                                {product.reviews.length} Reviews
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="mb-3 flex-col gap-1">
                    <Title>Description</Title>
                    <Subtitle>{product.description}</Subtitle>
                </View>
                <View className="mb-3">
                    <Title>Tags</Title>
                    <Subtitle>{product.tags.join(', ')}</Subtitle>
                </View>
                <View>
                    <Title>Colors</Title>
                    <View className="flex-row gap-2"></View>
                </View>
            </ScrollView>
            <View
                style={{ borderColor: colors.border }}
                className="flex-row items-center justify-between gap-4 border-t p-4"
            >
                <View
                    style={{ borderColor: colors.border }}
                    className="flex-row items-center gap-2 rounded-full border shadow-md"
                >
                    <RectButton
                        onPress={quantity.reduce}
                        enabled={quantity.disableReduce}
                        style={{ padding: 10 }}
                    >
                        <Iconify
                            icon="tabler:minus"
                            size={24}
                            color={colors.text}
                        />
                    </RectButton>

                    <Text style={{ color: colors.text }} className="text-lg">
                        {quantity.current}
                    </Text>
                    <RectButton
                        onPress={quantity.increase}
                        enabled={quantity.disableIncrease}
                        style={{ padding: 10 }}
                    >
                        <Iconify
                            icon="tabler:plus"
                            size={24}
                            color={colors.text}
                        />
                    </RectButton>
                </View>
                <RectButton
                    onPress={handleAddToCart}
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
                    <Body>
                        <Text className="text-white dark:text-black">
                            Add to cart
                        </Text>
                    </Body>
                </RectButton>
            </View>
        </View>
    );
}
