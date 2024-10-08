import { COLORS, fontSize } from "@/context";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Foundation,
  FontAwesome6,
} from "@expo/vector-icons";
export default function TabsNavigation() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },

        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.background,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={5}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              backgroundColor: COLORS.background,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-sharp" size={24} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="playlist"
        options={{
          title: "Playlists",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={28}
              color={color}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="artist"
        options={{
          title: "Artists",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={20} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
