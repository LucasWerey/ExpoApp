import React from "react";
import { View, Button } from "react-native";
import tw from "twrnc";
import { navigate, ScreenNames } from "@router/index";
import { SafeAreaView } from "@components/index";

export default function Index() {
  const navigateToTestScreen = () => {
    navigate(ScreenNames.home);
  };

  return (
    <SafeAreaView style={tw`w-full flex-1 justify-center items-center`}>
      <View style={tw`mx-6`}>
        <Button title="Go to Test Screen" onPress={navigateToTestScreen} />
      </View>
    </SafeAreaView>
  );
}
