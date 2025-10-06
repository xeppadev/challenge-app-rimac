import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface PaymentResponsibleSectionProps {
  documentNumber?: string;
  cellphone?: string;
}

export const PaymentResponsibleSection: React.FC<PaymentResponsibleSectionProps> = ({
  documentNumber,
  cellphone,
}) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionTitle,
          { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
        ]}
      >
        Responsable de pago
      </Text>
      <Text
        style={[
          styles.sectionText,
          { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
        ]}
      >
        DNI: {documentNumber || "No disponible"}
      </Text>
      <Text
        style={[
          styles.sectionText,
          { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
        ]}
      >
        Celular: {cellphone || "No disponible"}
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
  sectionText: {
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
});
