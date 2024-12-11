import React from "react";
import { Text } from "react-native";
import tw from "twrnc";
import { goBack } from "@router/index";
import { SafeAreaView, Button } from "@components/index";

export default function Test() {
  return (
    <SafeAreaView style={tw`w-full flex-1 justify-center items-center`}>
      <Button
        style={tw`bg-[#FF8C00] p-4 rounded-lg shadow-lg`}
        onPress={() => goBack()}
      >
        <Text style={tw`text-lg text-white font-bold`}>Back to Home</Text>
      </Button>
    </SafeAreaView>
  );
}
