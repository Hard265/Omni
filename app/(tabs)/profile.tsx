import { ListItem } from "@/components/UI/List";

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";

export default function ProfilePage() {
  const onbackgroundColor = "#000";

  return (
    <ScrollView
      contentContainerClassName="justify-center"
      className="flex flex-1 bg-white p-4 dark:bg-black"
    >
        <View className="mb-8 mt-8 flex-col gap-2">
        <ListItem
          title="Account information"
          subtitle="Edit your account information like your phone number, email, and password"
          append={
            <Iconify icon="feather:user" size={24} color={onbackgroundColor} />
          }
        />
        <ListItem
          title="Change password"
          subtitle="Change your password to keep your account secure"
          append={
            <Iconify icon="feather:lock" size={24} color={onbackgroundColor} />
          }
        />
        <ListItem
          title="Payment methods"
          subtitle="Add or remove payment methods to make purchases"
          append={
            <Iconify
              icon="feather:credit-card"
              size={24}
              color={onbackgroundColor}
            />
          }
        />
        <ListItem
          title="Edit address"
          subtitle="Edit your address to receive orders"
          append={
            <Iconify
              icon="feather:map-pin"
              size={24}
              color={onbackgroundColor}
            />
          }
        />
        <ListItem
          title="Download an archive of your data"
          subtitle="Download a zip file containing your personal data"
          append={
            <Iconify
              icon="feather:download-cloud"
              size={24}
              color={onbackgroundColor}
            />
          }
        />
        <ListItem
          title="Delete your account"
          subtitle="Delete your account and all associated data"
          append={
            <Iconify
              icon="feather:trash-2"
              size={24}
              color={onbackgroundColor}
            />
          }
        />
      </View>
    </ScrollView>
  );
}
