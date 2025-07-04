import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
const { height } = Dimensions.get("window");

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === "ios" ? height * 0.06 : height * 0.03;
  return (
    <View
      style={[
        { padding: paddingTop, flex: 1, backgroundColor: colors.neutral900 },
        style,
      ]}
    >
      <StatusBar barStyle={"light-content"} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
