import { View, ScrollView, Pressable, Text, Image } from 'react-native';
import Carousel from './ui/Carousel';
import { Heading } from './ui/Text';
import { useTheme } from '@react-navigation/native';
import ProductListSectionHeader from './ProductListSectionHeader';

export default function ProductListHeader() {
    const { colors } = useTheme();
    return (
        <View>
            <View className="h-64">
                <Carousel
                    images={[
                        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                        'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
                    ]}
                />
            </View>
            <ProductListSectionHeader title="categories" />
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
    );
}
