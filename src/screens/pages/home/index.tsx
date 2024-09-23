import ProductListHeader from '@/components/ProductListHeader';
import ProductListItem from '@/components/ProductListItem';
import ProductListSectionHeader from '@/components/ProductListSectionHeader';
import Carousel from '@/components/ui/Carousel';
import { Body, Heading } from '@/components/ui/Text';
import { fetchProducts } from '@/redux/actions/productActions';
import { Product } from '@/redux/reducers/productReducer';
import { AppDispatch, RootState } from '@/redux/store';
import { RootStackParamList } from '@/types/navigation';
import { formatCurrency } from '@/utils/utilities';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Link, useNavigation, useTheme } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    SectionList,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type HomeScreenProps = BottomTabNavigationProp<
    RootStackParamList,
    'RootSidebarNavigator'
>;

export default function HomeScreen({ navigate }: HomeScreenProps) {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const dispatch = useDispatch<AppDispatch>();
    const productStore = useSelector((state: RootState) => state.product);

    const grouped: {
        title: string;
        data: Product[][];
    }[] = _(productStore.products)
        .groupBy((item) => item.category)
        .map((items, category) => ({ title: category, data: [items] }))
        .value();

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleRefresh = () => {
        dispatch(fetchProducts());
    };

    return (
        <View className="flex-1">
            <SectionList
                className="my-2 flex-1"
                sections={grouped}
                renderSectionHeader={({ section }) => (
                    <ProductListSectionHeader title={section.title} />
                )}
                renderItem={({ item }) => {
                    return (
                        <FlatList
                            horizontal
                            data={item}
                            className="px-2"
                            contentContainerStyle={{ gap: 8 }}
                            renderItem={({ item }) => (
                                <ProductListItem data={item} />
                            )}
                        />
                    );
                }}
                ListHeaderComponent={
                   <ProductListHeader />
                }
            />
        </View>
    );
}
