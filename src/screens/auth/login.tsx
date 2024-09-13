import * as  React from 'react';
import { View, Button } from 'react-native';

import { InputField } from '@/components/ui/InputField';
import useAuth from '@/hooks/useAuth';

export default function LoginScreen(){
    const { signIn } = useAuth();
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });

    const handleLogin = async () => {
        await signIn({...form})
    };

    return (
        <View>
            <InputField placeholder="Email" value={form.email} onChangeText={(text) => setForm({ ...form, email: text })} />
            <InputField placeholder="Password" value={form.password} onChangeText={(text) => setForm({ ...form, password: text })} secureTextEntry={true} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};
