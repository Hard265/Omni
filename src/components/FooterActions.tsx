import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';

interface FooterActionsProps {
    onPressRight: () => void;
    isLoadingRight?: boolean;
    isDisabledRight?: boolean;
    onPressLeft: () => void;
    rightLabel: string;
    leftLabel: string;
}

export default function FooterActions(props: FooterActionsProps) {
    const { colors } = useTheme();

    return (
        <View
            className="mt-auto flex-row justify-between border-t p-4"
            style={{ borderColor: colors.border }}
        >
            <RectButton
                onPress={props.onPressLeft}
                rippleColor={colors.border}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    justifyContent: 'center',
                    padding: 12,
                    paddingHorizontal: 24,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: colors.border,
                }}
            >
                <Text style={{ color: colors.text }} className="font-medium">
                    {props.leftLabel}
                </Text>
            </RectButton>
            <RectButton
                onPress={props.onPressRight}
                rippleColor={colors.border}
                enabled={!props.isDisabledRight}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    justifyContent: 'center',
                    backgroundColor: colors.text,
                    padding: 12,
                    paddingHorizontal: 24,
                    borderRadius: 50,
                    opacity: props.isDisabledRight ? 0.5 : 1,
                }}
            >
                {props.isLoadingRight && (
                    <View className="animate-spin opacity-65">
                        <Iconify
                            color={colors.background}
                            icon="svg-spinners:90-ring-with-bg"
                            size={20}
                        />
                    </View>
                )}
                <Text className="font-medium text-white dark:text-black">
                    {props.rightLabel}
                </Text>
            </RectButton>
        </View>
    );
}
