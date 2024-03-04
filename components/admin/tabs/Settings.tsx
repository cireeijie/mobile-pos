import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../../assets/styles/colors";
import SettingsTab from "../../settings/SettingsTab";

const Settings = () => {
  return (
    <View style={{ height: "100%", flexDirection: "column", padding: 15 }}>
      <Text style={{ marginBottom: 10 }}>Settings</Text>
      <View style={{ flex: 1, backgroundColor: COLORS.lightestRed }}>
        <SettingsTab />
      </View>
    </View>
  );
};

export default Settings;
