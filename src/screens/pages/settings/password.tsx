import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function PasswordSettings() {
  const { colors } = useTheme();
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const hasChanges = !Object.values(form).every(Boolean);

  return (
    <View className="flex-1">
      <View className="flex-col gap-2 p-4">
        <Text
          className="text-lg font-semibold capitalize"
          style={{ color: colors.text }}
        >
          current password
        </Text>
        <TextInput
          style={{ color: colors.text, borderColor: colors.border }}
          className="rounded-md border p-2"
          value={form.currentPassword}
          autoComplete='current-password'
          onChangeText={(currentPassword) =>
            setForm({ ...form, currentPassword })
          }
        />
      </View>
      <View className="flex-row items-center gap-4 p-4">
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-lg font-semibold capitalize"
            style={{ color: colors.text }}
          >
            New password
          </Text>
          <TextInput
            style={{ color: colors.text, borderColor: colors.border }}
            className="rounded-md border p-2"
            value={form.newPassword}
            autoComplete='new-password'
            onChangeText={(newPassword) => setForm({ ...form, newPassword })}
          />
        </View>
        <View className="flex-1 flex-col gap-2">
          <Text
            className="text-lg font-semibold capitalize"
            style={{ color: colors.text }}
          >
            Confirm password
          </Text>
          <TextInput
            style={{ color: colors.text, borderColor: colors.border }}
            className="rounded-md border p-2"
            value={form.confirmPassword}
            autoComplete='new-password'
            onChangeText={(confirmPassword) =>
              setForm({ ...form, confirmPassword })
            }
          />
        </View>
      </View>
      <View
        style={{ borderColor: colors.border }}
        className="mt-auto flex-row justify-between border-t p-4"
      >
        <RectButton
          style={{
            padding: 8,
            paddingHorizontal: 16,
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 50,
          }}
          rippleColor={colors.border}
        >
          <Text
            className="text-base font-medium"
            style={{ color: colors.text }}
          >
            Forgot Password
          </Text>
        </RectButton>
        <RectButton
          enabled={!hasChanges}
          style={{
            padding: 8,
            paddingHorizontal: 16,
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.text,
            borderColor: colors.border,
            borderWidth: 2,
            borderRadius: 50,
            opacity: hasChanges ? 0.5 : 1,
          }}
          rippleColor={colors.border}
        >
          <Text
            className="text-base font-medium capitalize"
            style={{ color: colors.background }}
          >
            change
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
