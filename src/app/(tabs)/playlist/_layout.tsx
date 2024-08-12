import { Stack } from "expo-router";
import { View } from "react-native";

const PlaylistScreenLayout = () => {
  return (
    <View className="flex-1 bg-background">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Playlist",
          }}
        />
      </Stack>
    </View>
  );
};

export default PlaylistScreenLayout;
