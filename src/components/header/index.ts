import { COLORS } from "@/context";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: COLORS.background,
  },
  headerLargeTitleStyle: {
    color: COLORS.foreground,
  },
  headerTintColor: COLORS.foreground,
  headerTransparent: true,
  headerBlurEffect: "prominent",
  headerShadowVisible: false,
};
