import * as React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import useAuth from '@/hooks/useAuth';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { useNavigation, useTheme } from '@react-navigation/native';
import _ from 'lodash';
import FooterActions from '@/components/FooterActions';

export default function LoginScreen() {
    const { signIn } = useAuth();
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });
    const [pending, setPending] = React.useState(false);

    const handleLogin = async () => {
        setPending(true);
        try {
            await signIn({ ...form });
        } catch {
        } finally {
            setPending(false);
        }
    };

    return (
        <View className="flex-1">
            <View className="mb-1 flex-col gap-2 p-4">
                <Text
                    className="text-xl font-semibold"
                    style={{ color: colors.text }}
                >
                    Email address
                </Text>
                <TextInput
                    style={{ color: colors.text }}
                    className="rounded-md border border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
                    value={form.email}
                    keyboardType="email-address"
                    autoComplete="email"
                    onChangeText={(email) => setForm({ ...form, email })}
                />
            </View>
            <View className="mb-2 flex-col gap-2 p-4">
                <Text
                    className="text-xl font-semibold"
                    style={{ color: colors.text }}
                >
                    Password
                </Text>
                <TextInput
                    style={{ color: colors.text }}
                    className="rounded-md border border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
                    value={form.password}
                    secureTextEntry
                    autoComplete="current-password"
                    onChangeText={(password) => setForm({ ...form, password })}
                />
            </View>
            <FooterActions
                leftLabel="Forgot Password"
                onPressLeft={() => {
                    //@ts-ignore
                    navigation.navigate('Signup');
                }}
                onPressRight={handleLogin}
                rightLabel="Log In"
                isDisabledRight={pending}
                isLoadingRight={pending}
            />
        </View>
    );
}
//flex-[0.7] flex-row items-center justify-center gap-6 bg-black p-3.5 font-semibold text-white shadow-md shadow-gray-500/50 dark:bg-white
