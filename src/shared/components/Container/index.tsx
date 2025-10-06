import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  backgroundColor = COLORS.background,
  paddingHorizontal,
  paddingVertical,
}) => {
  const insets = useSafeAreaInsets();
  const { getResponsiveSpacing } = useResponsive();

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor,
    paddingTop: insets.top,
    paddingHorizontal:
      paddingHorizontal !== undefined
        ? getResponsiveSpacing(paddingHorizontal)
        : getResponsiveSpacing(24), // Default padding
    paddingVertical:
      paddingVertical !== undefined ? getResponsiveSpacing(paddingVertical) : 0,
  };

  return (
    <View style={[containerStyle, style]} accessible>
      {children}
    </View>
  );
};
