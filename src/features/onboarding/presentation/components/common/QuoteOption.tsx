import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface QuoteOptionProps {
  onGetQuote: () => void;
}

export const QuoteOption: React.FC<QuoteOptionProps> = ({ onGetQuote }) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <TouchableOpacity style={styles.container} onPress={onGetQuote}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
            ]}
          >
            Cotiza tu seguro de salud
          </Text>
          <Text
            style={[
              styles.subtitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            Encuentra el plan perfecto para ti y tu familia
          </Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    color: COLORS.gray,
  },
  arrowContainer: {
    marginLeft: SPACING.md,
  },
  arrow: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
