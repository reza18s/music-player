import { StackScreenWithSearchBar } from "@/components/header";
import { Stack } from "expo-router";
import { View } from "react-native";

const SongsScreenLayout = () => {
  return (
    <View className="flex-1 bg-background">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Songs",
          }}
        />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
