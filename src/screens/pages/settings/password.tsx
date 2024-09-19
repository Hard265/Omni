import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function PasswordSettings() {
    const { colors } = useTheme()
    const [form, setForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    return (
        <View className="flex-1 p-2">
            <View className="flex-col gap-2 mb-3">
                <Text className="font-semibold text-lg" style={{ color: colors.text }}>Current password</Text>
                <TextInput
                    style={{ color: colors.text }}
                    className="rounded-md border-2 border-black/75 focus:border-black p-2.5 text-base dark:border-white/75 dark:focus:border-white"
                    value={form.currentPassword}
                    onChangeText={currentPassword => setForm({ ...form, currentPassword })}
                />
            </View>
            <View className="flex-col gap-2 mb-3">
                <Text className="font-semibold text-lg" style={{ color: colors.text }}>New password</Text>
                <TextInput
                    className="rounded-md border-2 border-black/75 focus:border-black p-2.5 text-base dark:border-white/50 dark:focus:border-white"

                    value={form.newPassword} onChangeText={newPassword => setForm({ ...form, newPassword })} />
            </View>
            <View className="flex-col gap-2 mb-3">
                <Text className="font-semibold text-lg" style={{ color: colors.text }}>Confirm password</Text>
                <TextInput
                    className="rounded-md border-2 border-black/75 focus:border-black p-2.5 text-base dark:border-white/75 dark:focus:border-white"
                    value={form.confirmPassword} onChangeText={confirmPassword => setForm({ ...form, confirmPassword })} />
            </View>
            <View className="flex-row justify-between mt-auto">
                <RectButton style={{ padding: 10, borderColor: colors.border, borderWidth: 2, borderRadius: 50 }} rippleColor={colors.border}>
                    <Text className="font-medium text-base" style={{ color: colors.text }}>Forgot Password</Text>
                </RectButton>
                <RectButton style={{ padding: 10, paddingHorizontal: 16, flex: 0.5, justifyContent: "center", alignItems: "center", backgroundColor: colors.text, borderColor: colors.border, borderWidth: 2, borderRadius: 50 }} rippleColor={colors.border}>
                    <Text className="font-medium text-base" style={{ color: colors.background }}>Log In</Text>
                </RectButton>
            </View>
        </View>
    )
}