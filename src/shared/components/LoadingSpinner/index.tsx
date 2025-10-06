import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface LoadingSpinnerProps {
  message?: string;
  size?: "small" | "large";
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Cargando...",
  size = "large",
}) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Loading content"
    >
      <ActivityIndicator size={size} color={COLORS.primary} />
      {message && (
        <Text
          style={[
            styles.message,
            { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
          ]}
        >
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  message: {
    color: COLORS.gray,
    textAlign: "center",
  },
});
