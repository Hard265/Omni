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
      className="flex flex-row gap-4 items-center p-2"
    >
      {props.append && props.append}
      <View className="flex-col flex-1 item-center  pl-4">
        <Text style={{color:text}} className="text-lg font-medium">{props.title}</Text>
        {props.subtitle && (
          <Text className="text-gray-500">{props.subtitle}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
