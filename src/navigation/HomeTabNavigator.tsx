import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Iconify } from "react-native-iconify";

import HomeScreen from "@/screens/home";
import SearchScreen from "@/screens/home/search";
import CartScreen from "@/screens/home/cart";
import ProfileScreen from "@/screens/home/profile";

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
          name="Home"
          component={HomeScreen}
          options={{
            title: "Omni",
            tabBarIcon: (props) => (
              <Iconify
                color={props.color}
                icon="feather:home"
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
<Tab.Screen                                         name="Store"                                      component={HomeScreen}                            options={{                                          title: "Omni",                                    tabBarIcon: (props) => (                            <Iconify                                            color={props.color}                               icon="feather:shopping-bag"                       size={props.size}                               />                                              ),                                                headerRight(props) {                                return (                                            <Iconify                                            icon="feather:bell"                               color={props.tintColor}                           size={24}                                       />                                              );                                              },                                              }}                                              />
        <Tab.Screen
          name="Settings"
          component={ProfileScreen}
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
