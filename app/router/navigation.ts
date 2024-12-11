import { router, useLocalSearchParams } from "expo-router";
import { ScreenNames, RouteParams } from "./types";
import { ROUTE_CONFIG } from "./constants";

export const navigate = <T extends ScreenNames>(
  screen: T,
  params?: RouteParams[T]
) => {
  const route = ROUTE_CONFIG[screen];

  if (!route) {
    console.error(`Route ${screen} not found`);
    return;
  }

  if (route.auth && !isAuthenticated()) {
    router.push(ScreenNames.home);
    return;
  }

  router.push({
    pathname: route.path as never,
    params: params as never,
  });
};

export const useRouteParams = <T extends ScreenNames>(
  screenName: T
): RouteParams[T] => {
  const params = useLocalSearchParams();
  return params as RouteParams[T];
};

export const isAuthenticated = () => {
  return true;
};

export const goBack = () => {
  router.back();
};
