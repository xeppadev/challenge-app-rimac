import React from "react";
import {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { SPACING } from "@/shared/constants";
import { FormField } from "./FormField";

interface DocumentInputProps<T extends FieldValues> {
  control: Control<T>;
  documentTypeFieldName: Path<T>;
  documentNumberFieldName: Path<T>;
  error?: FieldErrors<T>;
}

export const DocumentInput = <T extends FieldValues>({
  control,
  documentTypeFieldName,
  documentNumberFieldName,
  error,
}: DocumentInputProps<T>) => {
  return (
    <View style={styles.container}>
      <FormField
        control={control}
        name={documentNumberFieldName}
        label="Nro. de documento"
        placeholder="Ingresa tu número de documento"
        keyboardType="numeric"
        maxLength={8}
        error={error?.[documentNumberFieldName] as FieldError | undefined}
        prefix="DNI"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
});
