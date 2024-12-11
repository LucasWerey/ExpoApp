import React from "react";
import { Pressable, Text, PressableProps } from "react-native";
import tw from "twrnc";

type ButtonProps = PressableProps & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        pressed && tw`opacity-50`,
        tw`p-2`,
        tw`rounded-lg`,
        tw`bg-red-500`,
      ]}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

export default Button;
