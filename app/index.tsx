import React from "react";
import tw from "twrnc";
import { SafeAreaView, Button } from "@components/index";
import { navigate, ScreenNames } from "@router/index";

export default function Index() {
  const navigateToTestScreen = () => {
    navigate(ScreenNames.home, { id: "1" });
  };

  return (
    <SafeAreaView style={tw`w-full flex-1 justify-center items-center`}>
      <Button text="eza" onPress={navigateToTestScreen} />
    </SafeAreaView>
  );
}
