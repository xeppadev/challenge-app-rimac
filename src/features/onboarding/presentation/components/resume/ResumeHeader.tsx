import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

export const ResumeHeader: React.FC = () => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <Text
      style={[
        styles.mainTitle,
        { fontSize: getResponsiveFontSize(FONT_SIZES.xl) },
      ]}
    >
      Resumen del seguro
    </Text>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    textAlign: "center",
    marginBottom: SPACING.xl,
  },
});
