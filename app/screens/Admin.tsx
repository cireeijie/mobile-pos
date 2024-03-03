import React from "react";
import { menus, userMenus } from "../../constants/navigationMenu";
import { COLORS } from "../../assets/styles/colors";
import MenuItem from "../../components/admin/navigation/MenuItem";
import { sideBarNavigation } from "../../utils/sideBarNavigation";
import Loading from "../../components/Loading";

const Tab = sideBarNavigation();

const Admin = () => {
  const navigationMenus = [...menus, ...userMenus];

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ focused }: { focused: any }) => {
          const menuItem = navigationMenus.find(
            (item) => item.title === route.name
          );
          if (menuItem) {
            return (
              <MenuItem
                title={menuItem.title}
                icon={menuItem.icons}
                isActive={focused}
                showTitle={false}
                type={menuItem.type}
              />
            );
          }
          return null;
        },
      })}
    >
      {navigationMenus.map((item) => {
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

export default Admin;
