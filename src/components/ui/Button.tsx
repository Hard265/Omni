import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  onTap: () => void;
  icon?: React.ReactNode;
}

export function Button({
  children,
  icon,
}: React.PropsWithChildren<ButtonProps>) {
  const {
    colors: { primary },
  } = useTheme();
  return (
    <RectButton
      style={{
        borderRadius: 8,
        padding: 16,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 16,
        backgroundColor: primary,
      }}
    >
      {icon && icon}
      <Text className="text-white">{children}</Text>
    </RectButton>
  );
}

interface IconButtonProps extends Omit<ButtonProps, "icon"> {}

export function IconButton({
  onTap,
  children,
}: React.PropsWithChildren<IconButtonProps>) {
  return (
    <RectButton style={{ borderRadius: 100, padding: 8 }} onPress={() => onTap}>
      {children}
    </RectButton>
  );
}
