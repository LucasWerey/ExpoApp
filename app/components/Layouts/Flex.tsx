import React from "react";
import { View, ViewProps } from "react-native";
import tw from "twrnc";

type FlexProps = ViewProps & {
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({ children, ...props }) => (
  <View {...props} style={[tw`flex-1`, props.style]}>
    {children}
  </View>
);

export default Flex;
