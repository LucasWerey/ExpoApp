import React from "react";
import { Text } from "react-native";
import { Button, SafeAreaView } from "@components/index";
import tw from "twrnc";
import { goBack, useRouteParams } from "@router/navigation";
import { ScreenNames } from "@router/types";

const HomeScreen: React.FC = () => {
  const { id } = useRouteParams(ScreenNames.home);

  return (
    <SafeAreaView style={tw`w-full flex-1 justify-center items-center`}>
      <Button
        onPress={() => goBack()}
        style={tw`bg-[#FF8C00] p-4 rounded-lg shadow-lg`}
      >
        <Text style={tw`text-lg text-white font-bold`}>Hello, {id}</Text>
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
