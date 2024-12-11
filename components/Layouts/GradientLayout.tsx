import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import { ViewStyle } from "react-native";

type GradientLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const GradientLayout: React.FC<GradientLayoutProps> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#333333", "#4d4d4d"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[tw`flex-1`, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientLayout;
