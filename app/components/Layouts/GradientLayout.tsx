import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import tw from "twrnc";

type GradientLayoutProps = Omit<
  LinearGradientProps,
  "colors" | "start" | "end"
> & {
  children: React.ReactNode;
};

const GradientLayout: React.FC<GradientLayoutProps> = ({
  children,
  style,
  ...props
}) => (
  <LinearGradient
    colors={["#000000", "#1a1a1a", "#333333", "#4d4d4d"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[tw`flex-1`, style]}
    {...props}
  >
    {children}
  </LinearGradient>
);

export default GradientLayout;
