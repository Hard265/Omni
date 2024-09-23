import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/auth/login';
import SignupScreen from '@/screens/auth/signup';

import ProductDetails from '@/screens/(modals)/product-details';

import RootSidebarNavigator from '@/navigation/RootSidebarNavigator';
import { RootStackParamList } from '@/types/navigation';
import AccountScreen from '@/screens/pages/account';
import NotificationsSettingsScreen from '@/screens/pages/settings/notifications';
import PasswordSettings from '@/screens/pages/settings/password';
import useAuth from '@/hooks/useAuth';
import CategoriesScreen from '@/screens/pages/categories';
import ReviewsScreen from '@/screens/pages/reviews';
import CategoryScreen from '@/screens/pages/category';

interface RootStackNavigatorProps {
  isSignout: boolean;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator({
  isSignout,
}: RootStackNavigatorProps) {
// const {}= useAuth()
//   console.log(isSignout);
  
  return (
    <Stack.Navigator>
      {isSignout ? (
        <Stack.Group screenOptions={{}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{title: "create account"}} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group >
            <Stack.Screen
              name="RootSidebarNavigator"
              component={RootSidebarNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
              options={{
                title: "Home",
              }}
            />
            <Stack.Screen
              name="Reviews"
              component={ReviewsScreen}
            />
            <Stack.Screen
              name="Category"
              component={CategoryScreen}
            />
          </Stack.Group>

          <Stack.Group screenOptions={{ animationTypeForReplace: "push" }}>
            <Stack.Screen
              name="Account"
              component={AccountScreen}
              options={{
                title: "Account information",
              }}
            />
            <Stack.Screen
              name="NotificationSettings"
              component={NotificationsSettingsScreen}
              options={{

                title: "Notifications",
              }}
            />
            <Stack.Screen
              name="PasswordSettings"
              component={PasswordSettings}
              options={{
                title: "Change password",
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                title: "",
                animation: 'slide_from_bottom',
                headerTransparent: true
              }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}
