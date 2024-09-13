import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@/screens/auth/login";
import SignupScreen from "@/screens/auth/signup";

import ItemScreen from "@/screens/(modals)/item";

import RootSidebarNavigator from "@/navigation/RootSidebarNavigator";

interface RootStackNavigatorProps {
  isSignout: boolean;
}
const Stack = createNativeStackNavigator();

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
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="Item"
              component={ItemScreen}
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
