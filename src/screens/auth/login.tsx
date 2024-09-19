import * as  React from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import useAuth from '@/hooks/useAuth';
import { RectButton } from 'react-native-gesture-handler';

export default function LoginScreen() {
    const { signIn } = useAuth();
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });

    const handleLogin = async () => {
        await signIn({ ...form })
    };

    return (
        <View>
            <View>
                <Text>Email address</Text>
                <TextInput value={form.email} onChangeText={email => setForm({ ...form, email })} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput value={form.password} onChangeText={password => setForm({ ...form, password })} />
            </View>
            <View>
                <RectButton>
                    <Text>Forgot Password</Text>
                </RectButton>
                <RectButton onPress={()=>handleLogin()}>
                    <Text>Log In</Text>
                </RectButton>
            </View>
        </View>
    );
};
