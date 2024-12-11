import React from "react";
import { View, ViewProps } from "react-native";

type BoxProps = ViewProps & {
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children, ...props }) => (
  <View {...props} style={props.style}>
    {children}
  </View>
);

export default Box;
