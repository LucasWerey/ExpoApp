import React from "react";
import StoreProvider from "@providers/StoreProvider";
import RouteProvider from "@providers/RouteProvider";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://7f2aed8b3281627adaaff67bfce3f88c@o4508700936962048.ingest.de.sentry.io/4508700942205008",
  enabled: __DEV__ ? false : true,
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  spotlight: __DEV__,
});

function RootLayout() {
  return (
    <StoreProvider>
      <RouteProvider />
    </StoreProvider>
  );
}

export default RootLayout;
