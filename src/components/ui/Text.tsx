import { useTheme } from '@react-navigation/native';
import { TextProps as BaseTextProps, Text as BaseText } from 'react-native';

interface TextProps extends BaseTextProps {}

export default function Text(props: TextProps) {
  const {
    colors: { text },
  } = useTheme();

  return (
    <BaseText style={{ color: text }} {...props}>
      {props.children}
    </BaseText>
  );
}

export function Title(props: BaseTextProps) {
  const { colors } = useTheme();

  return <Text style={{ color: colors.text }}>{props.children}</Text>;
}
