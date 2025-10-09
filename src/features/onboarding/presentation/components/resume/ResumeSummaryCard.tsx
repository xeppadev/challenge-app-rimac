import React from "react";
import { StyleSheet, View } from "react-native";
import { Plan } from "@/features/onboarding/domain/entities/Plan";
import { User } from "@/features/onboarding/domain/entities/User";
import { Card } from "@/shared/components";
import { COLORS, SPACING } from "@/shared/constants";
import { ChosenPlanSection } from "./ChosenPlanSection";
import { PaymentResponsibleSection } from "./PaymentResponsibleSection";
import { PersonInfoSection } from "./PersonInfoSection";

interface ResumeSummaryCardProps {
  user: User;
  plan: Plan;
  documentNumber?: string;
  cellphone?: string;
}

export const ResumeSummaryCard: React.FC<ResumeSummaryCardProps> = ({
  user,
  plan,
  documentNumber,
  cellphone,
}) => {
  return (
    <Card style={styles.summaryCard}>
      <PersonInfoSection user={user} />

      <View style={styles.separator} />

      <PaymentResponsibleSection
        documentNumber={documentNumber}
        cellphone={cellphone}
      />

      <View style={styles.separator} />

      <ChosenPlanSection plan={plan} />
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.lg,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: SPACING.md,
  },
});
