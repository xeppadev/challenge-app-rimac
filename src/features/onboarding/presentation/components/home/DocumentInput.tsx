import React from "react";
import { StyleSheet, View } from "react-native";
import { Control } from "react-hook-form";
import { FormField } from "./FormField";
import { SPACING } from "@/shared/constants";

interface DocumentInputProps {
  control: Control<any>;
  documentTypeFieldName: string;
  documentNumberFieldName: string;
  error?: any;
}

export const DocumentInput: React.FC<DocumentInputProps> = ({
  control,
  documentTypeFieldName,
  documentNumberFieldName,
  error,
}) => {
  return (
    <View style={styles.container}>
      <FormField
        control={control}
        name={documentNumberFieldName}
        label="Nro. de documento"
        placeholder="Ingresa tu número de documento"
        keyboardType="numeric"
        maxLength={8}
        error={error?.[documentNumberFieldName]}
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
