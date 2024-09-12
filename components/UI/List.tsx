import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      className={clsx(
        "flex-row items-center justify-between gap-6 border-b border-gray-300 p-4 dark:border-gray-800",
        props.disabled && "opacity-50",
      )}
    >
      {props.append && props.append}
      <View className="flex-1 flex-col items-start gap-1">
        <Text className="text-lg font-semibold dark:text-white">
          {props.title}
        </Text>
        {props.subtitle && (
          <Text className="text-gray-500 dark:text-gray-400">
            {props.subtitle}
          </Text>
        )}
      </View>
      <Iconify
        icon="feather:chevron-right"
        size={20}
        color={colors.gray[500]}
      />
    </TouchableOpacity>
  );
}
