import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  textStyle,
  accessibilityLabel,
}) => {
  const { getResponsiveFontSize, getResponsiveSpacing } = useResponsive();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 1000, // Fully rounded
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: SPACING.sm,
    };

    // Size styles
    const sizeStyles = {
      small: {
        paddingHorizontal: getResponsiveSpacing(SPACING.md),
        paddingVertical: getResponsiveSpacing(SPACING.sm),
        minHeight: 36,
      },
      medium: {
        paddingHorizontal: getResponsiveSpacing(SPACING.lg),
        paddingVertical: getResponsiveSpacing(SPACING.md),
        minHeight: 48,
      },
      large: {
        paddingHorizontal: getResponsiveSpacing(SPACING.xl),
        paddingVertical: getResponsiveSpacing(SPACING.lg),
        minHeight: 56,
      },
    };

    // Variant styles
    const variantStyles = {
      primary: {
        backgroundColor: COLORS.darkGray,
        borderWidth: 0,
      },
      secondary: {
        backgroundColor: COLORS.primary,
        borderWidth: 0,
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.darkBlue,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      opacity: disabled ? 0.6 : 1,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: "bold",
      fontSize: getResponsiveFontSize(FONT_SIZES.md),
    };

    const variantStyles = {
      primary: { color: COLORS.white },
      secondary: { color: COLORS.white },
      outline: { color: COLORS.darkBlue },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
    };
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      accessible
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === "outline" ? COLORS.darkBlue : COLORS.white}
        />
      )}
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
