import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { CheckboxField } from "@/features/onboarding/presentation/components/home/CheckboxField";
import { DocumentInput } from "@/features/onboarding/presentation/components/home/DocumentInput";
import { FormField } from "@/features/onboarding/presentation/components/home/FormField";
import { HeroSection } from "@/features/onboarding/presentation/components/home/HeroSection";
import { useUserForm } from "@/features/onboarding/presentation/hooks/useUserForm";
import { BackgroundBlur, Button, Container, Footer, Header } from "@/shared/components";
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
    <View style={styles.wrapper}>
      <BackgroundBlur />
      <Container backgroundColor="transparent">
        <Header />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <HeroSection />

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
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,

  },
  formCard: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  formTitle: {
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: SPACING.lg,
    textAlign: "center",
  },
  termsText: {
    color: COLORS.darkGray,
    fontWeight: "500",
    marginBottom: SPACING.lg,
    textDecorationLine: "underline",
  },
  submitButton: {
    marginTop: SPACING.xs,
  },
});
