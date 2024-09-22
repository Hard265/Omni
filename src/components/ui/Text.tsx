import { useTheme } from '@react-navigation/native';
import { Text, TextProps } from 'react-native';

const ThemedText = (props: TextProps) => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <Text {...props} style={{ color: text }}>
      {props.children}
    </Text>
  );
};

const Heading = (props: TextProps) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text
      {...props}
      style={{ color: text, fontFamily: 'Inter_900Black' }}
      className="text-2xl"
    >
      {props.children}
    </Text>
  );
};

const Heading2 = (props: TextProps) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text
      {...props}
      style={{ color: text, fontFamily: 'Inter_800ExtraBold' }}
      className="text-xl"
    >
      {props.children}
    </Text>
  );
};


const Title = (props: TextProps) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text
      {...props}
      style={{ color: text, fontFamily: 'Inter_600SemiBold' }}
      className="text-lg"
    >
      {props.children}
    </Text>
  );
};

const Subtitle = (props: TextProps) => {
  return (
    <ThemedText
      {...props}
      style={{ fontFamily: 'Inter_500Medium' }}
      className="text-base opacity-75"
    >
      {props.children}
    </ThemedText>
  );
};

const Body = (props: TextProps) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <Text
      {...props}
      style={{ color: text, fontFamily: 'Inter_500Medium' }}
      className="text-base"
    >
      {props.children}
    </Text>
  );
};

export { Heading, Heading2, Title, Subtitle, Body };
