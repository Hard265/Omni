import { useTheme } from '@react-navigation/native';
import clsx from 'clsx';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Iconify } from 'react-native-iconify';
import colors from 'tailwindcss/colors';

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
    <RectButton
      onPress={props.onPress}
      enabled={!props.disabled}
      rippleColor={border}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 16,
        rowGap: 16,
      }}
    >
      {props.append && props.append}
      <View className="item-center flex-1 flex-col pl-6">
        <Text style={{ color: text }} className="text-lg font-medium">
          {props.title}
        </Text>
        {props.subtitle && (
          <Text style={{ color: text, opacity: 0.65 }}>{props.subtitle}</Text>
        )}
      </View>
    </RectButton>
  );
}

export function ListItemNavigation(props: ListItemProps) {
  const {
    colors: { border, text },
  } = useTheme();
  return (
    <RectButton
      onPress={props.onPress}
      enabled={!props.disabled}
      rippleColor={border}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 16,
        gap: 16,
      }}
    >
      {props.append && props.append}
      <Text style={{ color: text }} className="flex-1 text-xl font-bold">
        {props.title}
      </Text>
    </RectButton>
  );
}
