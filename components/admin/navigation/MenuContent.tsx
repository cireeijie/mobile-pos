import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../../assets/styles/colors";

const MenuContent = ({ Component }: { Component: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bgGray }}>{Component}</View>
  );
};

export default MenuContent;
