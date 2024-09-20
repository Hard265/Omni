import { useNavigation, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';

export default function SignupScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });
  const [pending, setPending] = React.useState(false);

  const trueForm = !Object.values(form).every(Boolean)

  return (
    <View className="flex-1">
      <View className="flex-row gap-4 p-4">
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-xl font-semibold"
            style={{ color: colors.text }}
          >
            First name
          </Text>
          <TextInput
            style={{ color: colors.text }}
            className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
            value={form.firstName}
            autoComplete="name-given"
            onChangeText={(firstName) => setForm({ ...form, firstName })}
          />
        </View>
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-xl font-semibold"
            style={{ color: colors.text }}
          >
            Last name
          </Text>
          <TextInput
            style={{ color: colors.text }}
            className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
            value={form.lastName}
            autoComplete="name-family"
            onChangeText={(lastName) => setForm({ ...form, lastName })}
          />
        </View>
      </View>
      <View className="flex-col gap-2 p-4">
        <Text className="text-xl font-semibold" style={{ color: colors.text }}>
          Email address
        </Text>
        <TextInput
          style={{ color: colors.text }}
          className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
          value={form.email}
          autoComplete="email"
          keyboardType="email-address"
          onChangeText={(email) => setForm({ ...form, email })}
        />
      </View>
      <View className="flex-row gap-4 p-4">
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-xl font-semibold"
            style={{ color: colors.text }}
          >
            New password
          </Text>
          <TextInput
            style={{ color: colors.text }}
            className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
            value={form.password}
            autoComplete="password-new"
            secureTextEntry
            onChangeText={(password) => setForm({ ...form, password })}
          />
        </View>
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-xl font-semibold"
            style={{ color: colors.text }}
          >
            Re-enter password
          </Text>
          <TextInput
            style={{ color: colors.text }}
            className="rounded-md border-2 border-black/50 p-2.5 text-lg focus:border-black dark:border-white/50 dark:focus:border-white"
            value={form.password2}
            autoComplete="new-password"
            secureTextEntry
            onChangeText={(password2) => setForm({ ...form, password2 })}
          />
        </View>
      </View>
      <View
        className="mt-auto flex-row justify-between border-t p-4"
        style={{ borderColor: colors.border }}
      >
        <RectButton
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Login');
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
            I have an account
          </Text>
        </RectButton>
        <RectButton
          onPress={() => {}}
          rippleColor={colors.border}
          enabled={!pending && !trueForm}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            backgroundColor: colors.text,
            padding: 12,
            paddingHorizontal: 24,
            borderRadius: 50,
            opacity: (pending || trueForm) ? 0.5 : 1,
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
          <Text className="font-medium text-white dark:text-black">Signup</Text>
        </RectButton>
      </View>
    </View>
  );
}
