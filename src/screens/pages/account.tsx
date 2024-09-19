import { ListItem } from "@/components/ui/List";
import useAuth from "@/hooks/useAuth";
import { useTheme } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Iconify } from "react-native-iconify";

export default function AccountScreen() {
    const { signOut } = useAuth();
    const { colors } = useTheme()
    return (
        <ScrollView>
            <ListItem append={<Iconify icon="feather:phone" style={{ opacity: 0.75 }} size={20} color={colors.text} />} title="Phone" subtitle="Add" />
            <ListItem append={<Iconify icon="feather:at-sign" style={{ opacity: 0.75 }} size={20} color={colors.text} />} title="Email" subtitle="tester@mail.xyz" />
            <ListItem append={<Iconify icon="feather:flag" style={{ opacity: 0.75 }} size={20} color={colors.text} />} title="Conutry" subtitle="Malawi" />
            <RectButton rippleColor={colors.border} style={{ padding: 16 }} onPress={() => signOut()}>
                <Text className="dark:text-rose-500 text-lg font-semibold">Log out</Text>
            </RectButton>
        </ScrollView>
    )
}