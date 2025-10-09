import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Plan } from "@/features/onboarding/domain/entities/Plan";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface ChosenPlanSectionProps {
  plan: Plan;
}

export const ChosenPlanSection: React.FC<ChosenPlanSectionProps> = ({ plan }) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionTitle,
          { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
        ]}
      >
        Plan elegido
      </Text>
      <Text
        style={[
          styles.planName,
          { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
        ]}
      >
        {plan?.name}
      </Text>
      <Text
        style={[
          styles.planCost,
          { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
        ]}
      >
        Costo del Plan: ${plan?.price} al mes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    marginBottom: SPACING.sm,
  },
  planName: {
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  planCost: {
    color: COLORS.darkBlue,
    fontWeight: "600",
  },
});
