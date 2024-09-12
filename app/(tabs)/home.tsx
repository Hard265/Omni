import { blurhash } from "@/constants/hash";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  View,
  Text,
  SectionList,
  SectionListData,
  ScrollView,
  TouchableOpacity,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string[];
  description: string;
  colors: string[];
}

export default function HomeScreen() {
  const {
    colors: { background, primary },
  } = useTheme();
  const sections: SectionListData<
    Product,
    { data: Product[]; title: string }
  >[] = [];

  const categories = [
    {
      title: "Outdoors",
      thumbnail: "https://picsum.photos/seed/696/3000/2000",
    },
    {
      title: "Outdoors",
      thumbnail: "https://picsum.photos/seed/696/3000/2000",
    },
    {
      title: "Outdoors",
      thumbnail: "https://picsum.photos/seed/696/3000/2000",
    },
    {
      title: "Outdoors",
      thumbnail: "https://picsum.photos/seed/696/3000/2000",
    },
  ];

  return (
    <SectionList
      sections={sections}
      horizontal
      ListHeaderComponent={
        <View className="p-4">
          <View>
            <Text>special offers</Text>
            <Text className="" style={{ color: primary }}>
              see all
            </Text>
          </View>
          <View className="p-4">
            <Image
              className="flex-1 w-full bg-gray-500/25 aspect-video"
              source="https://picsum.photos/seed/696/3000/2000"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View>
            <Text>categories</Text>
            <Text className="" style={{ color: primary }}>
              see all
            </Text>
          </View>
          <ScrollView horizontal>
            {categories.map(({ thumbnail, title }) => (
              <TouchableOpacity className="flex flex-col gap-4 items-center justify-center">
                <Image
                  className="flex-1 rounded-full bg-gray-500/25"
                  source={thumbnail}
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <Text>{title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      }
      ListFooterComponent={<View className="p-4" />}
      renderSectionHeader={({ section }) => (
        <View className="flex-row justify-between items-center">
          <Text>{section.title}</Text>
          <Text className="" style={{ color: primary }}>
            see all
          </Text>
        </View>
      )}
      renderItem={() => {
        return (
          <View className="rounded-md shadow-md w-[50%] aspect-square">
            <Image
              className="flex-1 w-full bg-gray-500/25"
              source="https://picsum.photos/seed/696/3000/2000"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <View className="p-4 " style={{ backgroundColor: background }}>
              <Text className="">
                <Text>k</Text>
                <Text>689</Text>
                <Text>.00</Text>
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}
