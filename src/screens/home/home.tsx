import ItemsList from "@/components/ItemsList";
import { Product } from "@/products";
import { SectionListData } from "react-native";
import colors from "tailwindcss/colors";

export default function HomeScreen() {
  const sections: SectionListData<
    Product,
    { data: Product[]; title: string }
  >[] = [
    {
      data: [
        {
          id: "db1916d7-5b88-4d1a-94cd-ab0d832bc012",
          colors: [colors.amber[300]],
          description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
          image: [
            "https://picsum.photos/seed/696/3000/2000",
            "https://picsum.photos/seed/696/3000/2000",
          ],
          name: "Practical Concrete Pants",
          price: 957.0,
        },
      ],
      title: "Garden",
    },
  ];

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

  return <ItemsList sections={sections} categories={categories} />;
}
