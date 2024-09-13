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

import { AuthContext, AuthContextProps } from "@/hooks/useAuth";
import authReducer, { AuthStateAction } from "@/reducers/auth";
import RootStackNavigator from "@/navigation/RootStackNavigator";
import { Provider } from "react-redux";
import store from "@/redux/store";

const initialState = {
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
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  React.useEffect(() => {
    async function bootstrapAsync() {
      let userToken: string | null = null;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch {}
      dispatch({
        type: AuthStateAction.RESTORE_TOKEN,
        token: userToken,
      });
    }
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo<AuthContextProps>(
    () => ({
      signIn: async (credintials) => {
        try {
          await SecureStore.setItemAsync("userToken", "dummy");
        } catch {}
        dispatch({
          type: AuthStateAction.SIGN_IN,
          token: "dummy",
        });
      },
      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync("userToken");
        } catch {}
        dispatch({ type: AuthStateAction.SIGN_OUT });
      },
      isSignout: state.isSignout,
    }),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading</Text>}
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <AuthContext.Provider value={authContext}>
            <RootStackNavigator isSignout={state.isSignout} />
          </AuthContext.Provider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
