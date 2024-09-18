import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

// import Sidebar from '@/screens/(modals)/sidebar';
import HomeTabNavigator from '@/navigation/HomeTabNavigator';
import useAuth from '@/hooks/useAuth';
import { useTheme } from '@react-navigation/native';
import { ListItemNavigation } from '@/components/ui/List';
import { Iconify } from 'react-native-iconify';
import { Image, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

function HomeSidebar(props: DrawerContentComponentProps) {
  const { signOut } = useAuth();
  const {
    colors: { text, border },
  } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View className="border-b p-4 mb-3" style={{borderColor: border}}>
        <Image
          source={{
            uri: 'https://jnbyplus.com/cdn/shop/products/5N2211490001_2048x2048.jpg?v=1675240498',
          }}
          className="h-14 w-14 rounded-full mb-2"
        />
        <Text style={{ color: text }} className="text-lg font-semibold">
          Kim Toy
        </Text>
        <Text style={{ color: text }} className="opacity-80">
          Anthony80@hotmail.com
        </Text>
      </View>
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
        title="Scan QRCode"
        append={
          <Iconify icon="mingcute:qrcode-2-line" size={24} color={text} />
        }
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

export default function HomeSidebarLayout() {
  return (
    <Drawer.Navigator drawerContent={HomeSidebar}>
      <Drawer.Screen
        name="HomeTabLayout"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
