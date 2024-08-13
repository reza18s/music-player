import { Text } from "react-native";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native-gesture-handler";
export default function ButtonOpacity({
  className,
  onPress,
  icon,
  textClassName,
}: TouchableOpacityProps & { icon: React.ReactNode; textClassName: string }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={` ${className}`}
    >
      {icon}
      <Text className={textClassName}>Play</Text>
    </TouchableOpacity>
  );
}
