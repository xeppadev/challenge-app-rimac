import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { Button } from "@/shared/components/Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryButtonText?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "¡Oops! Algo salió mal",
  message = "No pudimos cargar la información. Por favor, intenta de nuevo.",
  onRetry,
  retryButtonText = "Intentar de nuevo",
}) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.container} accessible accessibilityLabel="Error state">
      <Ionicons name="alert-circle" size={64} color={COLORS.primary} />

      <Text
        style={[
          styles.title,
          { fontSize: getResponsiveFontSize(FONT_SIZES.xl) },
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.message,
          { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
        ]}
      >
        {message}
      </Text>

      {onRetry && (
        <Button
          title={retryButtonText}
          onPress={onRetry}
          variant="primary"
          style={styles.retryButton}
          accessibilityLabel="Retry loading content"
        />
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
  title: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    textAlign: "center",
  },
  message: {
    color: COLORS.gray,
    textAlign: "center",
    lineHeight: 22,
  },
  retryButton: {
    marginTop: SPACING.md,
  },
});
