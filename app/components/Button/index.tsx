import React from "react";
import { Pressable, Text, PressableProps } from "react-native";
import tw from "twrnc";

type ButtonProps = Omit<PressableProps, "hitSlop"> &
  (
    | { children: React.ReactNode; text?: never }
    | { text: string; children?: never }
  );

const Button: React.FC<ButtonProps> = ({ children, text, ...props }) => (
  <Pressable
    style={({ pressed }) => [
      pressed && tw`opacity-50`,
      tw`p-2`,
      tw`rounded-lg`,
      tw`bg-red-500`,
    ]}
    hitSlop={10}
    {...props}
  >
    <Text>{text ?? children}</Text>
  </Pressable>
);

export default Button;
