import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home, LucideIcon, ShoppingBag, User } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { Theme } from "../constants/Theme";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = Theme.colors.primary; // #EB5757
const INACTIVE_COLOR = Theme.colors.grayMid; // #9B9898

const ICONS: Record<string, LucideIcon> = {
  Home: Home,
  Cart: ShoppingBag,
  Profile: User,
};

function MyCustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.pill}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const Icon = ICONS[route.name];
          const color = isFocused ? ACTIVE_COLOR : INACTIVE_COLOR;

          function onPress() {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
              android_ripple={null}
            >
              <Icon size={24} color={color} strokeWidth={1.5} />
              <View
                style={[styles.indicator, { opacity: isFocused ? 1 : 0 }]}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyCustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { elevation: 0, borderTopWidth: 0 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    zIndex: 9999,
  },
  pill: {
    height: 64,
    backgroundColor: Theme.colors.white,
    borderRadius: 100,
    overflow: "hidden", // Clips the Android ripple to the pill shape
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // Borders and indicators: all zeroed
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // Soft shadow
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  tabItem: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    width: 28,
    height: 3,
    borderRadius: 100,
    backgroundColor: ACTIVE_COLOR,
  },
});
