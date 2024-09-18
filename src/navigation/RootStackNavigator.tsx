import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/auth/login';
import SignupScreen from '@/screens/auth/signup';

import ProductDetails from '@/screens/(modals)/product-details';

import RootSidebarNavigator from '@/navigation/RootSidebarNavigator';
import { RootStackParamList } from '@/types/navigation';

interface RootStackNavigatorProps {
  isSignout: boolean;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator({
  isSignout,
}: RootStackNavigatorProps) {
  return (
    <Stack.Navigator>
      {isSignout ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen
              name="RootSidebarNavigator"
              component={RootSidebarNavigator}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}
