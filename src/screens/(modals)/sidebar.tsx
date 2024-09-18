import { ListItemNavigation } from '@/components/ui/List';
import useAuth from '@/hooks/useAuth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Iconify } from 'react-native-iconify';

export default function HomeSidebar(props: DrawerContentComponentProps) {
  const { signOut } = useAuth();
  const {
    colors: { text },
  } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <ListItemNavigation
        title="Account Infomation"
        append={<Iconify icon="feather:user" size={24} color={text} />}
      />

      <ListItemNavigation
        title="Categories"
        append={
          <Iconify
            icon="material-symbols:category-outline-rounded"
            size={24}
            color={text}
          />
        }
      />
      <ListItemNavigation
        title="Deals and Promotions"
        append={
          <Iconify size={24} color={text} icon="mingcute:announcement-line" />
        }
      />
      <ListItemNavigation
        title="My Lists"
        append={
          <Iconify
            size={24}
            color={text}
            icon="material-symbols:patient-list-outline-rounded"
          />
        }
      />

      <ListItemNavigation
        title="Scan QRCode"
        append={
          <Iconify icon="mingcute:qrcode-2-line" size={24} color={text} />
        }
        onPress={() => {}}
      />
      <ListItemNavigation
        title="Follower Request"
        append={<Iconify icon="feather:user-plus" size={24} color={text} />}
        onPress={() => {}}
      />
      <ListItemNavigation
        title="Settings and Privancy"
        append={<Iconify size={24} color={text} icon="feather:settings" />}
      />
      <ListItemNavigation
        title="Log Out"
        append={<Iconify size={24} color={text} icon="feather:log-out" />}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
