import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sideBarNavigation } from "../../utils/sideBarNavigation";
import { settingsMenu } from "../../constants/navigationMenu";
import { COLORS } from "../../assets/styles/colors";
import SettingsItem from "./SettingsItem";
import Loading from "../Loading";

const Tab = sideBarNavigation();

const SettingsTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ focused }: { focused: any }) => {
          const menuItem = settingsMenu.find(
            (item) => item.title === route.name
          );
          if (menuItem) {
            return (
              <SettingsItem
                title={menuItem.title}
                icon={menuItem.icons}
                isActive={focused}
                showTitle={true}
                type={menuItem.type}
              />
            );
          }
          return null;
        },
      })}
    >
      {settingsMenu.map((item) => {
        return (
          <Tab.Screen
            key={item.title}
            name={item.title}
            component={item.component ? item.component : Loading}
            options={{
              title: item.title,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default SettingsTab;

const styles = StyleSheet.create({});
