import { StackScreenWithSearchBar } from "@/components/header";
import { Stack } from "expo-router";
import { View } from "react-native";

const HomeScreenLayout = () => {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Home",
          }}
        />
      </Stack>
    </View>
  );
};

export default HomeScreenLayout;
