import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";

import HomeScreen from "@/app/(tabs)/home";
import SearchScreen from "@/app/(tabs)/search";
import CartScreen from "@/app/(tabs)/cart";
import ProfileScreen from "@/app/(tabs)/profile";

const Tab = createBottomTabNavigator();

export default function HomeLayout() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}
    >
      <Tab.Group>
        <Tab.Screen
          name="Store"
          component={HomeScreen}
          options={{
            title: "Omni",
            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="feather:shopping-bag"
                size={props.size}
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
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Iconify color={color} icon="feather:user" size={size} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
