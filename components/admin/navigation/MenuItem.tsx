import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../assets/styles/colors";

interface MenuItemProps {
  title: string;
  icon: any;
  isActive?: boolean;
  showTitle: boolean;
  menuFunction?: (title: string) => any;
}

const MenuItem = ({
  title,
  icon,
  isActive,
  showTitle,
  menuFunction,
}: MenuItemProps) => {
  return (
    <Pressable
      onPress={() => menuFunction && menuFunction(title)}
      style={{
        padding: 15,
        borderLeftWidth: isActive ? 2 : 0,
        borderColor: COLORS.primary,
        backgroundColor: isActive ? COLORS.lightRed : COLORS.transparent,
      }}
    >
      <Image
        style={{ width: 15, height: 15 }}
        source={isActive ? icon.active : icon.default}
        alt={title}
      />
      <Text style={!showTitle && { display: "none" }}>{title}</Text>
    </Pressable>
  );
};

export default MenuItem;
