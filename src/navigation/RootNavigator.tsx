import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "../screens/LoadingScreen";
import BottomTabNavigator from "./BottomTabNavigator";

export type RootStackParamList = {
  Loading: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
