import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { Ionicons } from "@expo/vector-icons";
import { useResponsive } from "@/shared/hooks/useResponsive";
import Logo from "@/assets/images/Logo.svg";

interface HeaderProps {
  showBackButton?: boolean;
  onBackPress?: () => void;
  showPhone?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
  onBackPress,
  showPhone = true,
}) => {
  const { getResponsiveFontSize, getResponsiveSpacing } = useResponsive();

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Logo width={85} height={35} />
        </View>

        {/* Phone */}
        {showPhone && (
          <TouchableOpacity
            style={styles.phoneContainer}
            accessible
            accessibilityLabel="Contact phone"
          >
            <Ionicons name="call" size={16} color={COLORS.black} />
            <Text style={[styles.phone]}>(01) 411 6001</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: SPACING.md,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },
  phone: {
    color: COLORS.black,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.md,
    gap: SPACING.md,
  },
  backButton: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    flex: 1,
  },
});
