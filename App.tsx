import "./global.css";
import * as React from "react";
import { View, Text, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  LinkingOptions,
} from "@react-navigation/native";
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginScreen from "@/app/login";
import SignupScreen from "@/app/signup";
import HomeSidebarLayout from "@/components/Layouts/HomeSidebarLayout";
import { AuthContext, AuthContextProps } from "@/hooks/useAuth";

type State = {
  userToken: string | null;
  isSignout: boolean;
  isLoading: boolean;
};

const initialState: State = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const prefix = Linking.createURL("/");
const linkingConfig = {
  screens: {
    Home: "home",
    Item: {
      path: "item/:id",
      parse: { id: Number },
    },
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [prefix],
    config: linkingConfig,
  };
  const scheme = useColorScheme();
  const [state, dispatch] = React.useReducer(
    (
      prevState: State,
      action: {
        type: "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";
        token?: any;
      }
    ) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    initialState
  );

  React.useEffect(() => {
    async function bootstrapAsync() {
      let userToken: string | null = null;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch {}
      dispatch({
        type: "RESTORE_TOKEN",
        token: userToken,
      });
    }
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo<AuthContextProps>(
    () => ({
      signIn: async (credintials) => {
        try {
          await SecureStore.setItemAsync("userToke", "dummy");
        } catch {}
        dispatch({
          type: "SIGN_IN",
          token: "dummy",
        });
      },
      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync("userToken");
        } catch {}
        dispatch({ type: "SIGN_OUT" });
      },
      isSignout: state.isSignout,
    }),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        linking={linking}
        fallback={<Text>Loading</Text>}
        theme={scheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <AuthContext.Provider value={authContext}>
          <Stack.Navigator>
            {state.isSignout ? (
              <Stack.Group>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </Stack.Group>
            ) : (
              <>
                <Stack.Group>
                  <Stack.Screen
                    name="HomeSidebarLayout"
                    component={HomeSidebarLayout}
                    options={{
                      headerShown: false,
                    }}
                  />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: "modal" }}>
                  <Stack.Screen
                    name="Item"
                    component={HomeSidebarLayout}
                    options={{
                      headerShown: false,
                    }}
                  />
                </Stack.Group>
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
