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
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={styles.container}
        >
            {props.append && props.append}
            <View style={styles.subContainer}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                {props.subtitle && (
                    <Text style={styles.subtitle}>
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

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[300],
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        fontSize: 14,
    },
});
