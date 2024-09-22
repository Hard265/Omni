import { useTheme } from '@react-navigation/native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Body, Subtitle, Title } from './ui/Text';
import { Iconify } from 'react-native-iconify';
import colors from 'tailwindcss/colors';

interface ReviewItemProps {
  review: {
    comment: string;
    date: string;
    reviewerEmail: string;
    rating: number;
    reviewerName: string;
  };
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const {
    colors: { border },
  } = useTheme();
  return (
    <View
      style={{ borderColor: border }}
      className="flex-1 flex-col p-4"
    >
      <View className="flex-row items-center justify-between">
        <Title>{review.reviewerName}</Title>
        <View className="flex-row items-center">
          <Iconify icon="eva:star-fill" size={18} color={colors.amber[500]} />
          <Title>{review.rating}</Title>
        </View>
      </View>
      <Subtitle>{review.reviewerEmail}</Subtitle>
      <View className="border p-2 rounded-md" style={{ borderColor: border }}>
        <Body>{review.comment}</Body>
      </View>
    </View>
  );
}
