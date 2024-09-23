import FooterActions from '@/components/FooterActions';
import { Body, Heading, Heading2 } from '@/components/ui/Text';
import { ScrollView, TextInput, View } from 'react-native';

export default function AddPhoneNumberScreen() {
    return (
        <View className="">
            <ScrollView>
                <Body>
                    Enter the phone number you'd like to associate with your
                    account
                </Body>
                <View>
                    <Body>Phone Number</Body>
                    <TextInput
                        keyboardType="phone-pad"
                        autoComplete="tel-device"
                    />
                </View>
            </ScrollView>
            <FooterActions
                leftLabel="cancel"
                onPressLeft={() => {}}
                onPressRight={() => {}}
                rightLabel="Next"
                isLoadingRight={false}
                isDisabledRight={false}
            />
        </View>
    );
}
