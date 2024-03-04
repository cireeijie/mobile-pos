import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { COLORS } from "../../assets/styles/colors";

interface MenuItemProps {
  title: string;
  icon: any;
  isActive?: boolean;
  showTitle: boolean;
  type?: string;
  menuFunction?: (() => void | null) | undefined;
}

const MenuItem = ({
  title,
  icon,
  isActive,
  showTitle,
  type,
  menuFunction,
}: MenuItemProps) => {
  return (
    <View
      style={{
        padding: 15,
        borderLeftWidth: 2,
        borderColor: isActive ? COLORS.primary : "transparent",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Image
        style={{ width: 15, height: 15 }}
        source={isActive ? icon.active : icon.default}
        alt={title}
      />
      <Text
        style={[
          !showTitle && { display: "none" },
          { color: isActive ? COLORS.primary : "black" },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default MenuItem;
