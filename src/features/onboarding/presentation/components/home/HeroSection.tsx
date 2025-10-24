import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaskGroup from "@/assets/images/mask-group.svg";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

export const HeroSection: React.FC = () => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <>
      <View style={styles.headerSection}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>Seguro Salud Flexible</Text>
            </View>
            <Text
              style={[
                styles.mainTitle,
                { fontSize: getResponsiveFontSize(FONT_SIZES.xsl) },
              ]}
            >
              Creado para{"\n"}ti y tu familia
            </Text>
          </View>
          <View style={styles.familyImageContainer}>
            <MaskGroup width={134} height={160} />
          </View>
        </View>
      </View>

      <Text
        style={[
          styles.subtitle,
          { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
        ]}
      >
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    marginBottom: SPACING.lg,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
  },
  headerText: {
    flex: 1,
  },
  tagContainer: {
    marginBottom: SPACING.sm,
  },
  tag: {
    backgroundColor: COLORS.tertiary,
    color: COLORS.darkGray,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  mainTitle: {
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: SPACING.sm,
    lineHeight: 32,
  },
  subtitle: {
    color: COLORS.darkGray,
    fontWeight: "500",
    lineHeight: 22,
  },
  familyImageContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
