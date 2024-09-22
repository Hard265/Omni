import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Iconify } from 'react-native-iconify';
import HomeScreen from '@/screens/pages/home';
import SearchScreen from '@/screens/pages/home/search';
import CartScreen from '@/screens/pages/home/cart';
import SettingsScreen from '@/screens/pages/home/settings';
import OrdersScreen from '@/screens/pages/home/orders';
import { HomeLayoutParams } from '@/types/navigation';

const Tab = createBottomTabNavigator<HomeLayoutParams>();

export default function HomeLayout() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          //@ts-ignore
          component={HomeScreen}
          options={{
            title: 'Omni',

            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="material-symbols:shopping-bag-outline"
                size={props.size + 4}
              />
            ),
            headerRight(props) {
              return (
                <Iconify
                  icon="feather:bell"
                  color={props.tintColor}
                  size={24}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="feather:search"
                size={props.size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="feather:shopping-cart"
                size={props.size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="feather:shopping-bag"
                size={props.size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          //@ts-ignore
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Iconify color={color} icon="feather:settings" size={size} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
