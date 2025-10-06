import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeScreen } from "@/features/onboarding/presentation/screens/HomeScreen";
import { PlansScreen } from "@/features/onboarding/presentation/screens/PlansScreen";
import { ResumeScreen } from "@/features/onboarding/presentation/screens/ResumeScreen";

import type { RootStackParamList } from "@/shared/types";

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Plans" component={PlansScreen} />
          <Stack.Screen name="Resume" component={ResumeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
