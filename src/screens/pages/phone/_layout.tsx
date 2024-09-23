import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPhoneNumberScreen from './add-number';

const Stack = createNativeStackNavigator();

export default function PhoneNumberLayout() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AddPhoneNumber"
                component={AddPhoneNumberScreen}
                options={{
                    title: 'Add a phone number',
                }}
            />
        </Stack.Navigator>
    );
}
