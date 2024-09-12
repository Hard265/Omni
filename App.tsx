import * as React from "react";
import { View, Text, useColorScheme } from "react-native";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginScreen from "@/app/login";
import SignupScreen from "@/app/signup";
import HomeSidebarLayout from "@/components/Layouts/HomeSidebarLayout";
import {
    AuthContext,
    AuthContextProps,
} from "@/hooks/useAuth";

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

const Stack = createNativeStackNavigator();

function App() {
    const scheme = useColorScheme();
    const [state, dispatch] = React.useReducer(
        (
            prevState: State,
            action: {
                type:
                    | "RESTORE_TOKEN"
                    | "SIGN_IN"
                    | "SIGN_OUT";
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
                userToken = await SecureStore.getItemAsync(
                    "userToken"
                );
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
                    await SecureStore.setItemAsync(
                        "userToke",
                        "dummy"
                    );
                } catch {}
                dispatch({
                    type: "SIGN_IN",
                    token: "dummy",
                });
            },
            signOut: async () => {
                try {
                    await SecureStore.deleteItemAsync(
                        "userToken"
                    );
                } catch {}
                dispatch({ type: "SIGN_OUT" });
            },
            isSignout: state.isSignout,
        }),
        []
    );

    return (
        <GestureHandlerRootView
            theme={
                scheme === "dark" ? DarkTheme : DefaultTheme
            }
            style={{ flex: 1 }}
        >
            <NavigationContainer>
                <AuthContext.Provider value={authContext}>
                    <Stack.Navigator>
                        {state.isSignout ? (
                            <>
                                <Stack.Screen
                                    name="Login"
                                    component={LoginScreen}
                                />
                                <Stack.Screen
                                    name="Signup"
                                    component={SignupScreen}
                                />
                            </>
                        ) : (
                            <>
                                <Stack.Screen
                                    name="HomeSidebarLayout"
                                    component={
                                        HomeSidebarLayout
                                    }
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </AuthContext.Provider>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default App;
