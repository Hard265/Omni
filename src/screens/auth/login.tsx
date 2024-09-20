import * as React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import useAuth from '@/hooks/useAuth';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import { useNavigation, useTheme } from '@react-navigation/native';
import _ from 'lodash';

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
        <Text className="text-xl font-semibold" style={{ color: colors.text }}>
          Email address
        </Text>
        <TextInput
          style={{ color: colors.text }}
          className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
          value={form.email}
          keyboardType="email-address"
          autoComplete="email"
          onChangeText={(email) => setForm({ ...form, email })}
        />
      </View>
      <View className="mb-2 flex-col gap-2 p-4">
        <Text className="text-xl font-semibold" style={{ color: colors.text }}>
          Password
        </Text>
        <TextInput
          style={{ color: colors.text }}
          className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
          value={form.password}
          secureTextEntry
          autoComplete="current-password"
          onChangeText={(password) => setForm({ ...form, password })}
        />
      </View>
      <View
        className="mt-auto flex-row justify-between border-t p-4"
        style={{ borderColor: colors.border }}
      >
        <RectButton
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Signup');
          }}
          rippleColor={colors.border}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            padding: 12,
            paddingHorizontal: 24,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.border,
          }}
        >
          <Text style={{ color: colors.text }} className="font-medium">
            Forgot Password
          </Text>
        </RectButton>
        <RectButton
          onPress={() => handleLogin()}
          rippleColor={colors.border}
          enabled={!pending}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            backgroundColor: colors.text,
            padding: 12,
            paddingHorizontal: 24,
            borderRadius: 50,
            opacity: pending ? 0.5 : 1,
          }}
        >
          {pending && (
            <View className="animate-spin opacity-65">
              <Iconify
                color={colors.background}
                icon="svg-spinners:90-ring-with-bg"
                size={20}
              />
            </View>
          )}
          <Text className="font-medium text-white dark:text-black">Log In</Text>
        </RectButton>
      </View>
    </View>
  );
}
//flex-[0.7] flex-row items-center justify-center gap-6 bg-black p-3.5 font-semibold text-white shadow-md shadow-gray-500/50 dark:bg-white
