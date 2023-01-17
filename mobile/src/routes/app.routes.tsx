import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { House, SignOut, Tag } from "phosphor-react-native";
import { useTheme } from "native-base";

import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";

type AppRoutes = {
  home: undefined;
  myAds: undefined;
  signOut: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[600],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 72,
          paddingBottom: sizes[8],
          paddingTop: sizes[8],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
        }}
      />

      <Screen
        name="signOut"
        component={MyAds}
        options={{
          tabBarIcon: () => (
            <SignOut color={colors.red["500"]} size={iconSize} />
          ),
        }}
      />

      {/* <Screen
        name="exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      /> */}
    </Navigator>
  );
};
