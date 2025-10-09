import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckboxField } from "@/features/onboarding/presentation/components/home/CheckboxField";
import { DocumentInput } from "@/features/onboarding/presentation/components/home/DocumentInput";
import { FormField } from "@/features/onboarding/presentation/components/home/FormField";
import { useUserForm } from "@/features/onboarding/presentation/hooks/useUserForm";
import { Button, Card, Container, Header } from "@/shared/components";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";
import type { RootStackParamList } from "@/shared/types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { getResponsiveFontSize } = useResponsive();
  const { form, onSubmit } = useUserForm();

  const handleFormSubmit = form.handleSubmit((data) => {
    console.log("Form submitted:", data);
    // Here you would save the form data to a store or context
    onSubmit(data);
    // For now, we'll just show an alert and navigate
    Alert.alert("Éxito", "Datos guardados correctamente");
    navigation.navigate("Plans");
  });

  return (
    <Container>
      <Header />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
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
              <Image
                source={require("@/assets/images/mask-group.png")}
                resizeMode="contain"
              />
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

        {/* Form Section */}
        <View style={styles.formCard}>
          <Text
            style={[
              styles.formTitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
            ]}
          >
            Cotiza tu seguro de salud
          </Text>

          <DocumentInput
            control={form.control}
            documentTypeFieldName="documentType"
            documentNumberFieldName="documentNumber"
            error={form.formState.errors}
          />

          <FormField
            control={form.control}
            name="cellphone"
            label="Celular"
            placeholder="Ingresa tu número de celular"
            keyboardType="numeric"
            maxLength={9}
            error={form.formState.errors.cellphone}
            prefix="+51"
          />

          <CheckboxField
            control={form.control}
            name="acceptPrivacyPolicy"
            label="Acepto la Política de Privacidad"
            error={form.formState.errors.acceptPrivacyPolicy}
          />

          <CheckboxField
            control={form.control}
            name="acceptCommercialCommunications"
            label="Acepto la Política Comunicaciones Comerciales"
            error={form.formState.errors.acceptCommercialCommunications}
          />

          <Text style={styles.termsText}>Aplican Términos y Condiciones.</Text>

          <Button
            title="Cotiza aquí"
            onPress={handleFormSubmit}
            variant="primary"
            size="large"
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  formCard: {
    marginTop: SPACING.lg,
  },
  formTitle: {
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: SPACING.lg,
    textAlign: "center",
  },
  formRow: {
    flexDirection: "row",
    gap: SPACING.md,
  },
  documentTypeContainer: {
    flex: 1,
  },
  documentNumberContainer: {
    flex: 2,
  },
  termsText: {
    color: COLORS.darkGray,
    fontWeight: "500",
    marginBottom: SPACING.lg,
    textDecorationLine: "underline",
  },
  submitButton: {
    marginTop: SPACING.md,
  },
});
