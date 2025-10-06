import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Button, Card, Container, Header } from "@/shared/components";
import { COLORS, FONT_SIZES, SPACING } from "@/shared/constants";
import { useResponsive } from "@/shared/hooks/useResponsive";
import type { RootStackParamList, User } from "@/shared/types";
import {
  usePlans,
  usePlansByAge,
} from "@/features/onboarding/presentation/hooks/usePlans";
import { useUser } from "@/features/onboarding/presentation/hooks/useUser";
import { PlanCard } from "@/features/onboarding/presentation/components/plans/PlanCard";
import { SelectionOption } from "@/features/onboarding/presentation/components/plans/SelectionOption";
import { calculateAge } from "@/shared/utils";

type PlansScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Plans"
>;

export const PlansScreen: React.FC = () => {
  const navigation = useNavigation<PlansScreenNavigationProp>();
  const { getResponsiveFontSize } = useResponsive();

  // State for selection type
  const [selectionType, setSelectionType] = useState<"for-me" | "for-other">(
    "for-me"
  );

  // Get user data
  const { data: user, isLoading: userLoading } = useUser();

  // Calculate user age from birthDay using utility function
  const userAge = user?.birthDay ? calculateAge(user.birthDay) : 0;

  // Get plans filtered by age
  const {
    data: plans,
    isLoading: plansLoading,
    error: plansError,
  } = usePlansByAge(userAge);

  const isLoading = userLoading || plansLoading;
  const error = plansError;

  const handleSelectPlan = (plan: any) => {
    // Apply 5% discount if it's for someone else
    const finalPlan =
      selectionType === "for-other"
        ? { ...plan, price: Math.round(plan.price * 0.95) }
        : plan;

    navigation.navigate("Resume", { plan: finalPlan, user: user as User });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <Container>
        <Header onBackPress={handleGoBack} />
        <View style={styles.loadingContainer}>
          <Text>Cargando planes...</Text>
        </View>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header onBackPress={handleGoBack} />
        <View style={styles.errorContainer}>
          <Text>Error al cargar los planes</Text>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Header onBackPress={handleGoBack} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Selection Options */}
        <Card style={styles.selectionCard}>
          <Text
            style={[
              styles.selectionTitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
            ]}
          >
            {user?.name} ¿Para quién deseas cotizar?
          </Text>
          <Text
            style={[
              styles.selectionSubtitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            Selecciona la opción que se ajuste más a tus necesidades.
          </Text>

          <View style={styles.selectionOptions}>
            <SelectionOption
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              icon={require("@/assets/icons/IcProtectionLight.png")}
              isSelected={selectionType === "for-me"}
              onPress={() => setSelectionType("for-me")}
            />

            <SelectionOption
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              icon={require("@/assets/icons/IcAddUserLight.png")}
              isSelected={selectionType === "for-other"}
              onPress={() => setSelectionType("for-other")}
            />
          </View>
        </Card>

        {/* Plans Section */}
        <View style={styles.plansSection}>
          <Text
            style={[
              styles.plansTitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.lg) },
            ]}
          >
            Elige tu plan ideal
          </Text>
          <Text
            style={[
              styles.plansSubtitle,
              { fontSize: getResponsiveFontSize(FONT_SIZES.sm) },
            ]}
          >
            Selecciona el plan que mejor se adapte a tus necesidades
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.plansHorizontalScroll}
            contentContainerStyle={styles.plansHorizontalContent}
          >
            {plans?.map((plan) => (
              <View key={plan.id} style={styles.planCardWrapper}>
                <PlanCard
                  plan={plan}
                  onSelect={() => handleSelectPlan(plan)}
                  {...(selectionType === "for-other"
                    ? { showDiscount: true }
                    : {})}
                />
              </View>
            ))}
          </ScrollView>
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
  // Selection Card Styles
  selectionCard: {
    marginBottom: SPACING.lg,
  },
  selectionTitle: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  selectionSubtitle: {
    color: COLORS.gray,
    lineHeight: 18,
    marginBottom: SPACING.lg,
  },
  selectionOptions: {
    gap: SPACING.md,
  },
  // Plans Section Styles
  plansSection: {
    marginTop: SPACING.lg,
  },
  plansTitle: {
    fontWeight: "bold",
    color: COLORS.darkBlue,
    marginBottom: SPACING.xs,
  },
  plansSubtitle: {
    color: COLORS.gray,
    lineHeight: 18,
    marginBottom: SPACING.lg,
  },
  plansHorizontalScroll: {
    marginHorizontal: -SPACING.md,
  },
  plansHorizontalContent: {
    paddingHorizontal: SPACING.md,
    gap: SPACING.md,
  },
  planCardWrapper: {
    width: 280,
    height: 400, // Fixed height for all cards
    marginRight: SPACING.md,
  },
});
