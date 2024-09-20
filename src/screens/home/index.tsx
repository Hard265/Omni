import ProductList from "@/components/ProductList";
import HomeAppBar from "@/components/HomeAppBar";

export default function HomeScreen() {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64],
  });
  
  return <View className="flex-1">
    <HomeAppBar translateY={translateY}/>
    <ProductList onScroll={(e) =>{
      scrollY.setValue(e.nativeEvent.contentOffset.y)
    }}/>
  </View>
}
