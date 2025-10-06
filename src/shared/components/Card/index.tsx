import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { COLORS, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: "small" | "medium" | "large";
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = "medium",
  shadow = true,
}) => {
  const { getResponsiveSpacing } = useResponsive();

  const getPaddingStyle = () => {
    const paddingStyles = {
      small: {
        padding: getResponsiveSpacing(SPACING.sm),
      },
      medium: {
        padding: getResponsiveSpacing(SPACING.md),
      },
      large: {
        padding: getResponsiveSpacing(SPACING.lg),
      },
    };
    return paddingStyles[padding];
  };

  const getShadowStyle = () => {
    if (!shadow) return {};

    return {
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    };
  };

  return (
    <View
      style={[styles.container, getPaddingStyle(), getShadowStyle(), style]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginVertical: SPACING.xs,
  },
});
