import React from "react";
import {
  SafeAreaView as RNSafeAreaView,
  ViewStyle,
  ViewProps,
} from "react-native";
import tw from "twrnc";
import GradientLayout from "./GradientLayout";

type SafeAreaViewProps = ViewProps & {
  children: React.ReactNode;
  style?: ViewStyle;
};

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  ...props
}) => (
  <GradientLayout style={tw`flex-1`}>
    <RNSafeAreaView {...props} style={[tw`flex-1`, style]}>
      {children}
    </RNSafeAreaView>
  </GradientLayout>
);

export default SafeAreaView;
