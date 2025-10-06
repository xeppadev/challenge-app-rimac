import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryProvider } from "./src/shared/contexts/QueryProvider";
import { AppNavigator } from "./src/shared/navigation/AppNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryProvider>
        <AppNavigator />
      </QueryProvider>
    </GestureHandlerRootView>
  );
}
