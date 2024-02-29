import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../assets/styles/colors";

const Loading = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    </View>
  );
};

export default Loading;
