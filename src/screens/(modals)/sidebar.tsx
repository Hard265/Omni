import useAuth from "@/hooks/useAuth";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Iconify } from "react-native-iconify";

export default function HomeSidebar(props: DrawerContentComponentProps) {
  const { signOut } = useAuth()

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Account Infomation"
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify icon="feather:user" size={size} color={color} />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        label="Categories"
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify icon="iconamoon:category" size={size} color={color} />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        label="Deals and Promotions"
        onPress={() =>{}}
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify
            size={size}
            color={color}
            icon="mingcute:announcement-line"
          />
        )}
      />
      <DrawerItem
        label="My Lists"
        onPress={() => {}}
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify
            size={size}
            color={color}
            icon="material-symbols:patient-list-outline-rounded"
          />
        )}
      />

      <DrawerItem
        label="Scan QRCode"
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify icon="mingcute:qrcode-2-line" size={size} color={color} />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        label="Follower Request"
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify icon="feather:user-plus" size={size} color={color} />
        )}
        onPress={() => {}}
      />
      <DrawerItem
        label="Settings and Privancy"
        onPress={() => {}}
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify size={size} color={color} icon="feather:settings" />
        )}
      />
      <DrawerItem
        label="Log Out"
        onPress={() => signOut()}
        labelStyle={styles.itemLabel}
        icon={({ size, color }) => (
          <Iconify size={size} color={color} icon="feather:log-out" />
        )}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  itemLabel: {
     },
});
