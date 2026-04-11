import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CollectionDetailScreen from "../screens/CollectionDetailScreen";

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
  CollectionDetail: { collectionId: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CollectionDetail" component={CollectionDetailScreen} />
    </Stack.Navigator>
  );
}
