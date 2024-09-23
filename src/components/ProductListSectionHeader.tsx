import { Link, useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Body, Heading } from './ui/Text';

interface ProductListSectionHeaderProps {
    title: string;
}

export default function ProductListSectionHeader({ title }: ProductListSectionHeaderProps) {
    const { colors } = useTheme();
    
    return (
        <View className="flex-row items-center justify-between p-4 px-2">
            <Heading>{title}</Heading>
            <Link
                to={{
                    screen: 'Category',
                    params: { name: title },
                }}
            >
                <Body>
                    <Text style={{ color: colors.primary }} className="text-xl">
                        see all
                    </Text>
                </Body>
            </Link>
        </View>
    );
}
