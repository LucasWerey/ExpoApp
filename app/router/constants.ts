import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ScreenNames } from "./types";

type ROUTE_CONFIG_TYPE = Record<
  string,
  { path: string; auth: boolean; options: NativeStackNavigationOptions }
>;

export const ROUTE_CONFIG = {
  [ScreenNames.index]: {
    path: "index",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
  [ScreenNames.test]: {
    path: "screens/TestScreen",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
  [ScreenNames.home]: {
    path: "screens/HomeScreen",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
} satisfies ROUTE_CONFIG_TYPE;

export const PUBLIC_ROUTES = Object.entries(ROUTE_CONFIG)
  .filter(([_, config]) => !config.auth)
  .map(([key]) => key);
