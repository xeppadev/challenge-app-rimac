import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  error?: FieldError;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  maxLength?: number;
  prefix?: string;
}

export const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  error,
  keyboardType = "default",
  maxLength,
  prefix,
}: FormFieldProps<T>) => {
  const { getResponsiveFontSize } = useResponsive();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, error && styles.inputError]}>
            {prefix && (
              <View style={styles.prefixContainer}>
                <Text
                  style={[
                    styles.prefix,
                    { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
                  ]}
                >
                  {prefix}
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={16}
                  color={COLORS.black}
                  style={styles.prefixIcon}
                />
                <View style={styles.prefixDivider} />
              </View>
            )}
            <View style={styles.inputContent}>
              <Text
                style={[
                  styles.label,
                  { fontSize: getResponsiveFontSize(FONT_SIZES.xs) },
                ]}
              >
                {label}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  { fontSize: getResponsiveFontSize(FONT_SIZES.md) },
                ]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholderTextColor={COLORS.lightGray}
              />
            </View>
          </View>
        )}
      />
      {error && <Text style={[styles.errorText]}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 56,
  },
  inputContent: {
    flex: 1,
    padding: SPACING.sm,
  },
  prefixContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.sm,
    gap: SPACING.xs,
  },
  prefix: {
    color: COLORS.black,
    fontWeight: "600",
  },
  prefixIcon: {
    marginLeft: SPACING.xs,
  },
  prefixDivider: {
    width: 1,
    height: "100%",
    backgroundColor: COLORS.gray,
  },
  label: {
    color: COLORS.darkGray,
    fontWeight: "400",
  },
  input: {
    color: COLORS.black,
    padding: 0,
    marginTop: 2,
    height: 24,
  },
  inputError: {
    borderColor: COLORS.primary,
  },
  errorText: {
    color: COLORS.primary,
    marginTop: SPACING.xs,
    fontSize: FONT_SIZES.xs,
  },
});
