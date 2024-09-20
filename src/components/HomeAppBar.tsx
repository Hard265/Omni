import { useTheme } from '@react-navigation/native';
import { Animated, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HomeAppBarProps {
  translateY: Animated.AnimatedInterpolation<string | number>;
}

export default function HomeAppBar({ translateY }: HomeAppBarProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.card,
        width: '100%',
        transform: [{ translateY: translateY }],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 64,
        elevation: 4,
        zIndex: 1,
      }}
    >
      <Image
        source={{
          uri: 'https://jnbyplus.com/cdn/shop/products/5N2211490001_2048x2048.jpg?v=1675240498',
        }}
        className="mb-2 h-14 w-14 rounded-full"
      />
    </Animated.View>
  );
}
