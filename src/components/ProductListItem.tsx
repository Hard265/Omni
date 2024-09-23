import { Product } from '@/redux/reducers/productReducer';
import { formatCurrency } from '@/utils/utilities';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { Body } from './ui/Text';

interface ProductListItemProps {
    data: Product;
}

export default function ProductListItem({
    data: { id, images, title, price },
}: ProductListItemProps) {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                //@ts-ignore
                navigation.navigate('ProductDetails', {
                    productId: id,
                });
            }}
            style={{ borderColor: colors.border }}
            className="aspect-[17/18] h-64 flex-col rounded-lg border"
        >
            <Image
                source={{
                    uri: images[0],
                }}
                className="flex-1 rounded-t-lg bg-white"
                resizeMode="center"
                resizeMethod="scale"
            />
            <View className="flex-col gap-2 p-2">
                <Body numberOfLines={1} ellipsizeMode="middle">
                    {title}
                </Body>
                <Text
                    style={{ color: colors.text, fontFamily: 'FatFace' }}
                    className="text-xl"
                >
                    <Text className="text-lg">MK </Text>
                    {formatCurrency(price * 800)}
                </Text>
            </View>
        </Pressable>
    );
}
