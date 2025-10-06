import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { Plan } from "@/features/onboarding/domain/entities/Plan";

interface PlanCardProps {
  plan: Plan;
  onSelect: () => void;
  showDiscount?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, showDiscount = false }) => {
  const { getResponsiveFontSize } = useResponsive();

  // Calculate discounted price if needed
  const finalPrice = showDiscount ? Math.round(plan.price * 0.95) : plan.price;

  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.planName,
              { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
            ]}
          >
            {plan.name}
          </Text>
          <Text
            style={[
              styles.ageRange,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            Hasta {plan.age} años
          </Text>
        </View>
        <View style={styles.priceContainer}>
          {showDiscount && (
            <View style={styles.discountContainer}>
              <Text
                style={[
                  styles.originalPrice,
                  { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
                ]}
              >
                ${plan.price}
              </Text>
              <Text
                style={[
                  styles.discountBadge,
                  { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
                ]}
              >
                -5%
              </Text>
            </View>
          )}
          <Text
            style={[
              styles.price,
              { fontSize: getResponsiveFontSize(FONT_SIZES.xl) },
            ]}
          >
            ${finalPrice}
          </Text>
          <Text
            style={[
              styles.priceUnit,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            /mes
          </Text>
        </View>
      </View>

      <View style={styles.featuresContainer}>
        <Text
          style={[
            styles.featuresTitle,
            { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
          ]}
        >
          Beneficios incluidos:
        </Text>
        {plan.description.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Ionicons
              name="checkmark-circle"
              size={16}
              color={COLORS.tertiary}
            />
            <Text
              style={[
                styles.feature,
                { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
              ]}
            >
              {feature}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text
          style={[
            styles.selectText,
            { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
          ]}
        >
          Seleccionar plan →
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    flex: 1, // Use all available height
    justifyContent: "space-between", // Distribute content evenly
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: SPACING.sm,
  },
  titleContainer: {
    flex: 1,
  },
  planName: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  ageRange: {
    color: COLORS.gray,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: COLORS.gray,
  },
  discountBadge: {
    backgroundColor: COLORS.tertiary,
    color: COLORS.white,
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    color: COLORS.primary,
  },
  priceUnit: {
    color: COLORS.gray,
  },
  featuresContainer: {
    flex: 1, // Take up remaining space
    marginBottom: SPACING.sm,
  },
  featuresTitle: {
    fontWeight: "600",
    color: COLORS.darkBlue,
    marginBottom: SPACING.sm,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  feature: {
    color: COLORS.darkBlue,
    flex: 1,
    lineHeight: 18,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    paddingTop: SPACING.md,
    alignItems: "center",
  },
  selectText: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
