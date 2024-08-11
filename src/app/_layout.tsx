import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 items-center justify-center bg-card">
        <Text className="">fuck u</Text>
      </View>
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
