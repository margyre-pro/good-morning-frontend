import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CollectionDetailScreen from "../screens/CollectionDetailScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
  CollectionDetail: { collectionId: string };
  ProductDetail: { productId: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="CollectionDetail"
        component={CollectionDetailScreen}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}
