import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgProps } from "react-native-svg";

import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface SelectionOptionProps {
  title: string;
  description: string;
  icon: React.FC<SvgProps>;
  isSelected: boolean;
  onPress: () => void;
}

export const SelectionOption: React.FC<SelectionOptionProps> = ({
  title,
  description,
  icon: Icon,
  isSelected,
  onPress,
}) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <TouchableOpacity
      style={[
        styles.selectionOption,
        isSelected && styles.selectionOptionSelected,
      ]}
      onPress={onPress}
    >
      <View style={styles.selectionOptionContent}>
        <Icon
          width={24}
          height={24}
          color={isSelected ? COLORS.primary : COLORS.gray}
        />
        <View style={styles.selectionOptionText}>
          <Text
            style={[
              styles.selectionOptionTitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
              isSelected && styles.selectionOptionTitleSelected,
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.selectionOptionDescription,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            {description}
          </Text>
        </View>
        {isSelected && (
          <Ionicons name="checkmark-circle" size={20} color={COLORS.primary} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selectionOption: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 12,
    padding: SPACING.md,
    backgroundColor: COLORS.white,
  },
  selectionOptionSelected: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  selectionOptionContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.md,
  },
  selectionOptionText: {
    flex: 1,
  },
  selectionOptionTitle: {
    fontWeight: "600",
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  selectionOptionTitleSelected: {
    color: COLORS.primary,
  },
  selectionOptionDescription: {
    color: COLORS.gray,
    lineHeight: 18,
  },
});
