import { ListItem } from '@/components/ui/List';
import { HomeLayoutParams } from '@/types/navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Iconify } from 'react-native-iconify';

type SettingsScreenProps = BottomTabNavigationProp<
  HomeLayoutParams,
  'Settings'
>;

export default function SettingsScreen(props: SettingsScreenProps) {
  const {
    colors: { text },
  } = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView className="flex flex-1">
      <View className="flex flex-col">
        <ListItem
          title="Account information"
          subtitle="Edit your account information like your phone number, email, and contry"
          onPress={() => {
            //@ts-ignore
            navigation.navigate("Account")
          }}
          append={
            <Iconify
              icon="feather:user"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Change password"
          subtitle="Change your password to keep your account secure"
          onPress={() => {
            //@ts-ignore
            navigation.navigate("PasswordSettings")
          }}
          append={
            <Iconify
              icon="material-symbols:password-rounded"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Payment methods"
          subtitle="Add or remove payment methods to make purchases"
          append={
            <Iconify
              icon="feather:credit-card"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          onPress={() => { }}
          title="Edit address"
          subtitle="Edit your address to receive orders"
          append={
            <Iconify
              icon="feather:map-pin"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Notifications"
          subtitle="Select kinds of notifications that you get about your activities, interest and recommendations"
          onPress={() => {
            //@ts-ignore
            navigation.navigate("NotificationSettings")
          }}
          append={
            <Iconify
              icon="ph:bell-simple-bold"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Download an archive of your data"
          subtitle="Download a zip file containing your personal data"
          append={
            <Iconify
              icon="material-symbols:cloud-download-outline-rounded"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Privancy and safety"
          subtitle="Manage infomation that you see and share on Omni"
          append={
            <Iconify
              icon="material-symbols:shield-person-outline-rounded"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
        <ListItem
          title="Delete your account"
          subtitle="Delete your account and all associated data"
          append={
            <Iconify
              icon="feather:trash-2"
              style={{ opacity: 0.75 }}
              size={24}
              color={text}
            />
          }
        />
      </View>
    </ScrollView>
  );
}
