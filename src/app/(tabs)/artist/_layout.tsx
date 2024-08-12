import { Stack } from "expo-router";
import { View } from "react-native";

const ArtistScreenLayout = () => {
  return (
    <View className="flex-1 bg-background">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Artist",
          }}
        />
      </Stack>
    </View>
  );
};

export default ArtistScreenLayout;
