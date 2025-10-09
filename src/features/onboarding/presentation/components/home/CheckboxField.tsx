import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface CheckboxFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  error?: FieldError;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  control,
  name,
  label,
  error,
}) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => onChange(!value)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, value && styles.checkboxChecked]}>
              {value && (
                <Ionicons name="checkmark" size={16} color={COLORS.white} />
              )}
            </View>
            <Text
              style={[
                styles.label,
                { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )}
      />
      {error && (
        <Text
          style={[
            styles.errorText,
            { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
          ]}
        >
          {error.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.darkGray,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: COLORS.darkGray,
  },
  label: {
    color: COLORS.darkGray,
    flex: 1,
    lineHeight: 20,
  },
  errorText: {
    color: COLORS.primary,
    marginTop: SPACING.xs,
  },
});
