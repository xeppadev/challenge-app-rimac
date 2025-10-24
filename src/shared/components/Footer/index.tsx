import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoFooter from "@/assets/images/Logo-footer.svg";
import { COLORS, SPACING } from "@/shared/constants";

export const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
        <LogoFooter width={85} height={24} />
         <View style={styles.divider} />
        <Text style={styles.copyright}>
          © 2023 RIMAC Seguros y Reaseguros.
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkGray,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    alignItems: "center",
    gap: SPACING.md,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.grayline,

  },

  copyright: {
    color: COLORS.white,
    fontSize: 12,
    textAlign: "center",
    opacity: 0.8,
  },
});
