import {
  DarkTheme,
  DefaultTheme,
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { Text, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './src/global.css';

import { AuthContext, AuthContextProps } from '@/hooks/useAuth';
import RootStackNavigator from '@/navigation/RootStackNavigator';
import authReducer, { AuthStateAction } from '@/reducers/auth';
import store from '@/redux/store';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const prefix = Linking.createURL('/');
const linkingConfig = {
  screens: {
    Home: 'home',
    Item: {
      path: 'item/:id',
      parse: { id: Number },
    },
  },
};

function App() {
  const [fontsLoaded, fontsError] = useFonts({
    FatFace: AbrilFatface_400Regular,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
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
        userToken = await SecureStore.getItemAsync('userToken');
      } catch {
      } finally {
        dispatch({
          type: AuthStateAction.RESTORE_TOKEN,
          token: userToken,
        });
      }
    }
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo<AuthContextProps>(
    () => ({
      signIn: async (credintials) => {
        try {
          await SecureStore.setItemAsync('userToken', 'dummy');
        } catch {}
        dispatch({
          type: AuthStateAction.SIGN_IN,
          token: 'dummy',
        });
      },
      signOut: async () => {
        try {
          await SecureStore.deleteItemAsync('userToken');
          dispatch({
            type: AuthStateAction.SIGN_OUT,
          });
        } catch {}
      },
      isSignout: state.isSignout,
    }),
    [],
  );

  if (!fontsLoaded || state.isLoading || fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading</Text>}
          theme={
            scheme === 'dark'
              ? { ...DarkTheme, colors: { ...DarkTheme.colors, card: '#000' } }
              : { ...DefaultTheme }
          }
        >
          <AuthContext.Provider value={authContext}>
            <StatusBar animated style={scheme === 'dark' ? 'light' : 'dark'} />
            <RootStackNavigator isSignout={state.userToken === null} />
          </AuthContext.Provider>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
