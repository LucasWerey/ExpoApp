import React from "react";
import { Stack } from "expo-router";
import { ROUTE_CONFIG } from "@router/constants";

type RouteProviderProps = {
  children?: React.ReactNode;
};

const RouteProvider: React.FC<RouteProviderProps> = ({ children }) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {Object.entries(ROUTE_CONFIG).map(([name, config]) => (
        <Stack.Screen key={name} name={config.path} options={config.options} />
      ))}
      {children}
    </Stack>
  );
};

export default RouteProvider;
