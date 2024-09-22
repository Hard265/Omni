import { ListItem } from '@/components/ui/List';
import { useTheme } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';
import { Iconify } from 'react-native-iconify';

export default function NotificationsSettingsScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView className="flex-1">
      <View className="px-4 py-2">
        <Text style={{ color: colors.text }}>
          Select the kind of notifications you get about activities, interest,
          and recommendations.
        </Text>
      </View>
      <ListItem
        append={
          <Iconify
            icon="ph:sliders-horizontal-bold"
            size={20}
            color={colors.text}
            style={{ opacity: 0.75 }}
          />
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
            style={{ opacity: 0.75 }}
          />
        }
        title="Preferences"
        subtitle="select your preferences by notification type"
      />
    </ScrollView>
  );
}
