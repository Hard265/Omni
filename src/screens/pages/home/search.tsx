import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { Iconify } from 'react-native-iconify';

export default function ScreenScreen() {
    const { colors } = useTheme();
    const [query, setQuery] = React.useState('');

    return (
        <FlatList
            data={[]}
            ListHeaderComponent={
                <View className="relative m-4">
                    <TextInput
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                        style={{
                            backgroundColor: colors.text,
                            color: colors.background,
                            fontFamily: 'Inter_600SemiBold',
                        }}
                        placeholder="Search for what you want to buy"
                        className="rounded-lg p-2.5 pl-12 text-lg"
                        cursorColor={colors.background}
                    />
                    <View className="absolute bottom-0 left-0 top-0 p-2.5">
                        <Iconify
                            icon="feather:search"
                            size={24}
                            color={colors.background}
                        />
                    </View>
                </View>
            }
            renderItem={({ item }) => <Text></Text>}
        />
    );
}
