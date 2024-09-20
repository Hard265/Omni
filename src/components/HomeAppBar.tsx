import { useTheme } from '@react-navigation/native';
import { Animated } from 'react-native';

interface HomeAppBarProps {
  translateY: number;
}

export default function HomeAppBar({ translateY }: HomeAppBarProps) {
  const { colors } = useTheme();

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.card,
        width: '100%',
        height: 64,
        transform: [{ translateY: translateY }],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        elevation: 4,
        zIndex: 1,
      }}
    ></Animated.View>
  );
}
