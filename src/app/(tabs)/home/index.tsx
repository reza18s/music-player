import { ScrollView, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-background">
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </View>
  );
};

export default HomeScreen;
