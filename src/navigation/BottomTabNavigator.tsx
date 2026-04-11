import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home, LucideIcon, ShoppingBag, User } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Theme } from "../constants/Theme";

import HomeStack from "./HomeStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = Theme.colors.primary;
const INACTIVE_COLOR = "#A0A0A0";

// Les clés ici doivent correspondre EXACTEMENT aux names des Tab.Screen
const ICONS: Record<string, LucideIcon> = {
  HomeTab: Home,
  CartTab: ShoppingBag,
  ProfileTab: User,
};

function MyCustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottomOffset = insets.bottom > 0 ? insets.bottom + 8 : 24;

  return (
    <View style={[styles.container, { bottom: bottomOffset }]}>
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
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
              {Icon && <Icon size={24} color={color} strokeWidth={1.5} />}
              {isFocused && <View style={styles.indicator} />}
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
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="CartTab" component={CartStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    zIndex: 1000,
  },
  pill: {
    height: 64,
    backgroundColor: Theme.colors.white,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  tabItem: {
    flex: 1,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    width: 20,
    height: 3,
    borderRadius: 100,
    backgroundColor: ACTIVE_COLOR,
  },
});
