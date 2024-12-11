import { Stack } from "expo-router";
import { Provider as StoreProvider } from "jotai";
import { store } from "../store";
import { ROUTE_CONFIG } from "@router/constants";

export default function RootLayout() {
  return (
    <StoreProvider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        {Object.entries(ROUTE_CONFIG).map(([name, config]) => (
          <Stack.Screen
            key={name}
            name={config.path}
            options={config.options}
          />
        ))}
      </Stack>
    </StoreProvider>
  );
}
