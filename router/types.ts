export enum ScreenNames {
  index = "/",
  test = "/screens/TestScreen",
  home = "/screens/HomeScreen",
}

export type RouteParams = {
  [ScreenNames.index]: undefined;
  [ScreenNames.test]: undefined;
  [ScreenNames.home]: { id?: string };
};

export type RoutePath = keyof typeof ScreenNames;
export type RouteParamList = RouteParams;
