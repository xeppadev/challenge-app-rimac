import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IcHomeLight from "@/assets/icons/IcHomeLight.svg";
import IcHospitalLight from "@/assets/icons/IcHospitalLight.svg";
import { Plan } from "@/features/onboarding/domain/entities/Plan";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface PlanCardProps {
  plan: Plan;
  onSelect: () => void;
  showDiscount?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, showDiscount = false }) => {
  const { getResponsiveFontSize } = useResponsive();

  // Calculate discounted price if needed
  const finalPrice = showDiscount ? Math.round(plan.price * 0.95) : plan.price;

  // Determine which icon to use based on plan name
  const PlanIcon = plan.name.toLowerCase().includes("casa") || plan.name.toLowerCase().includes("home")
    ? IcHomeLight
    : IcHospitalLight;

  return (
    <View style={styles.container}>
      {/* Header with icon */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {showDiscount && (
            <View style={styles.discountBadge}>
              <Text
                style={[
                  styles.discountText,
                  { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
                ]}
              >
                DESCUENTO 5%
              </Text>
            </View>
          )}
          <Text
            style={[
              styles.planName,
              { fontSize: getResponsiveFontSize(FONT_SIZES.xl) },
            ]}
          >
            {plan.name}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <PlanIcon width={56} height={56} />
        </View>
      </View>

      {/* Price section */}
      <View style={styles.priceSection}>
        <Text
          style={[
            styles.priceLabel,
            { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
          ]}
        >
          COSTO DEL PLAN
        </Text>
        {showDiscount && (
          <Text
            style={[
              styles.originalPrice,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            ${plan.price} antes
          </Text>
        )}
        <Text
          style={[
            styles.price,
            { fontSize: getResponsiveFontSize(FONT_SIZES.xxl) },
          ]}
        >
          ${finalPrice} al mes
        </Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Features */}
      <View style={styles.featuresContainer}>
        {plan.description.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Ionicons
              name="person"
              size={20}
              color={COLORS.darkBlue}
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

      {/* Button */}
      <TouchableOpacity style={styles.selectButton} onPress={onSelect}>
        <Text
          style={[
            styles.selectButtonText,
            { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
          ]}
        >
          Seleccionar plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: SPACING.xl,

    borderWidth: 2,
    borderColor: "#E8E8E8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: SPACING.lg,
  },
  titleContainer: {
    flex: 1,
  },
  discountBadge: {
    backgroundColor: "#7DF0BA",
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: SPACING.sm,
  },
  discountText: {
    color: COLORS.darkBlue,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  planName: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
  iconContainer: {
    width: 56,
    height: 56,
  },
  priceSection: {
    marginBottom: SPACING.md,
  },
  priceLabel: {
    color: COLORS.gray,
    fontWeight: "700",
    letterSpacing: 0.8,
    marginBottom: SPACING.xs,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: COLORS.gray,
    marginBottom: 4,
  },
  price: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginVertical: SPACING.lg,
  },
  featuresContainer: {
    marginBottom: SPACING.lg,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  feature: {
    color: COLORS.darkBlue,
    flex: 1,
    lineHeight: 20,
  },
  selectButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
