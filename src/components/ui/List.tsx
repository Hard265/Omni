import { useTheme } from "@react-navigation/native";
import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Iconify } from "react-native-iconify";
import colors from "tailwindcss/colors";

interface ListItemProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  append?: React.ReactNode;
  disabled?: boolean;
}

export function ListItem(props: ListItemProps) {
  const {
    colors: { text, border },
  } = useTheme();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      className="flex flex-row items-center justify-between p-4 border-b"
      style={{ borderBottomColor: border }}
    >
      {props.append && props.append}
      <View className="flex-row items-center gap-4">
        <Text className="text-lg font-semibold">{props.title}</Text>
        {props.subtitle && (
          <Text className="text-gray-500">{props.subtitle}</Text>
        )}
      </View>
      <Iconify icon="feather:chevron-right" size={20} color={text} />
    </TouchableOpacity>
  );
}
