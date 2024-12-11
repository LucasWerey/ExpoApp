import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ScreenNames } from "./types";

export const ROUTE_CONFIG = {
  [ScreenNames.index]: {
    path: "index",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    } satisfies NativeStackNavigationOptions,
  },
  [ScreenNames.test]: {
    path: "screens/TestScreen",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    } satisfies NativeStackNavigationOptions,
  },
  [ScreenNames.home]: {
    path: "screens/HomeScreen",
    auth: false,
    options: {
      headerShown: false,
      gestureEnabled: true,
    } satisfies NativeStackNavigationOptions,
  },
} as const;

export const PUBLIC_ROUTES = Object.entries(ROUTE_CONFIG)
  .filter(([_, config]) => !config.auth)
  .map(([key]) => key);
