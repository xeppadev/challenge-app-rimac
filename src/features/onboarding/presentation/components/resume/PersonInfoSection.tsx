import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { User } from "@/features/onboarding/domain/entities/User";

interface PersonInfoSectionProps {
  user: User;
}

export const PersonInfoSection: React.FC<PersonInfoSectionProps> = ({ user }) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.section}>
      <Text
        style={[
          styles.sectionLabel,
          { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
        ]}
      >
        PRECIOS CALCULADOS PARA:
      </Text>
      <View style={styles.personInfo}>
        <Ionicons name="person" size={20} color={COLORS.darkBlue} />
        <Text
          style={[
            styles.personName,
            { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
          ]}
        >
          {user?.name} {user?.lastName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: SPACING.md,
  },
  sectionLabel: {
    fontWeight: "600",
    color: COLORS.gray,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
  },
  personInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  personName: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
});
