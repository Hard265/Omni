import ProductListItem from '@/components/ProductListItem';
import { Title } from '@/components/ui/Text';
import { Product } from '@/redux/reducers/productReducer';
import apiclient from '@/services/apiclient';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    SectionList,
    Text,
    View,
} from 'react-native';

type stateParams = {
    products: Product[];
    isLoading: boolean;
    error: any;
};

export default function CategoryScreen(props: any) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [state, setState] = React.useState<stateParams>({
        products: [
            {
                // availabilityStatus: 'In Stock',
                // brand: 'Nail Couture',
                category: 'beauty',
                description:
                    'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
                // dimensions: { depth: 29.06, height: 10.89, width: 8.11 },
                // discountPercentage: 2.46,
                id: 5,
                images: [
                    'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
                ],
                // meta: {
                //     barcode: '3212847902461',
                //     createdAt: '2024-05-23T08:56:21.619Z',
                //     qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
                //     updatedAt: '2024-05-23T08:56:21.619Z',
                // },
                minimumOrderQuantity: 46,
                price: 8.99,
                rating: 3.91,
                // returnPolicy: 'No return policy',
                reviews: [],
                // shippingInformation: 'Ships in 1 week',
                // sku: 'YUIIIP4W',
                stock: 41,
                tags: ['beauty', 'nail polish'],
                thumbnail:
                    'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png',
                title: 'Red Nail Polish',
                // warrantyInformation: '1 year warranty',
                // weight: 9,
            },
        ],
        isLoading: false,
        error: null,
    });

    React.useEffect(() => {
        async function boostrapAsync() {
            setState({ ...state, isLoading: true });
            try {
                // const { data } = await apiclient.get(
                //     `products/category/${props.route.params.name}`,
                // );
                // console.log(data.products);
                // setState({ ...state, products: data.products, error: null });
            } catch (error) {
                setState({ ...state, error });
            } finally {
                setState({ ...state, isLoading: false });
            }
        }
        navigation.setOptions({
            title: props.route.params.name,
        });
        boostrapAsync();
    }, []);

    return (
        <View className="flex-1">
            {state.isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size={'large'} color={colors.primary} />
                </View>
            ) : state.error ? (
                <View className="flex-1 items-center justify-center">
                    <Title>Something went wrong</Title>
                </View>
            ) : (
                <FlatList
                    className="flex-1 p-2"
                    numColumns={2}
                    data={state.products}
                    renderItem={({ item }) => <ProductListItem data={item} />}
                />
            )}
        </View>
    );
}
