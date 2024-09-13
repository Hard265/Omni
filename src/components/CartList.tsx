import { removeItemFromCart } from "@/redux/actions/cartActions";
import { AppDispatch, RootState } from "@/redux/store";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "./ui/Button";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@react-navigation/native";

export default function CartList() {
    const {colors: {primary}} = useTheme()
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <FlatList
      data={cartItems}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.name}</Text>
            <IconButton onTap={()=>handleRemoveItem(item.id)}>
                <Iconify icon="feather:trash" color={primary} size={20}/>
            </IconButton>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>Your cart is empty</Text>}
    />
  );
}
