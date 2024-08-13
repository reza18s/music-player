import { COLORS } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

const queryClient = new QueryClient();
const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1 bg-background">
        <RootNavigation></RootNavigation>
        <StatusBar style="auto" backgroundColor={COLORS.accent} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
