import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import { ResumeHeader } from "@/features/onboarding/presentation/components/resume/ResumeHeader";
import { ResumeSummaryCard } from "@/features/onboarding/presentation/components/resume/ResumeSummaryCard";
import { useFormStore } from "@/features/onboarding/presentation/store/useFormStore";
import { Container, Header } from "@/shared/components";
import type { RootStackParamList, User } from "@/shared/types";


type ResumeScreenRouteProp = RouteProp<RootStackParamList, "Resume">;
type ResumeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Resume"
>;

export const ResumeScreen: React.FC = () => {
  const route = useRoute<ResumeScreenRouteProp>();
  const navigation = useNavigation<ResumeScreenNavigationProp>();

  // Get data passed from PlansScreen
  const { plan, user } = route.params;

  // Get form data from Zustand store
  const { formData } = useFormStore();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header onBackPress={handleGoBack} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ResumeHeader />

        <ResumeSummaryCard
          user={user}
          plan={plan}
          documentNumber={formData.documentNumber || ""}
          cellphone={formData.cellphone || ""}
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
