import { ListItem } from "@/components/ui/List";
import { useTheme } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import { Iconify } from "react-native-iconify";

export default function NotificationsSettingsScreen() {
    const { colors } = useTheme()
    return (
        <ScrollView className="flex-1">
            <Text>Select the kind of notifications you get about activities, interest, and recommendations.</Text>
            <ListItem
                append={
                    <Iconify
                        icon="ph:sliders-horizontal-bold"
                        size={20}
                        color={colors.text}
                        style={{ opacity: .75 }} />
                }
                title="Filters"
                subtitle="Choose the notifications you would like to see and those you dont"
            />
            <ListItem
                append={
                    <Iconify
                        icon="ph:sliders-horizontal-bold"
                        size={20}
                        color={colors.text}
                        style={{ opacity: .75 }} />
                }
                title="Preferences"
                subtitle="select your preferences by notification type"
            />
        </ScrollView>
    )
}