import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { menus, userMenus } from "../../../constants/navigationMenu";
import { COLORS } from "../../../assets/styles/colors";
import { navigationMenuContext } from "../../../context/useContext";

import MenuItem from "./MenuItem";

const NavigationMenu = () => {
  const [menu, setMenu] = useState(menus);
  const [userMenu, setUserMenus] = useState(userMenus);

  useEffect(() => {
    navigationMenuContext.menu = [...menu, ...userMenu];
    navigationMenuContext.activeMenu = navigationMenuContext.menu.filter(
      (item: any) => item.isActive === true
    );
  }, [menu, userMenu]);

  const handlePress = (title: string) => {
    const updateMenu = menu.map((item) => ({
      ...item,
      isActive: item.title === title,
    }));

    const updateUserMenu = userMenu.map((item) => ({
      ...item,
      isActive: item.title === title,
    }));

    setMenu(updateMenu);
    setUserMenus(updateUserMenu);
  };

  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {menu.map((item) => {
          return (
            <MenuItem
              key={`menu-${item.title}`}
              title={item.title}
              icon={item.icons}
              isActive={item.isActive}
              showTitle={false}
              menuFunction={() => handlePress(item.title)}
            />
          );
        })}
      </View>
      <View style={{ alignItems: "center" }}>
        {userMenu.map((item) => {
          return (
            <MenuItem
              key={`menu-${item.title}`}
              title={item.title}
              icon={item.icons}
              isActive={item.isActive}
              showTitle={false}
              menuFunction={
                item.title === "Logout"
                  ? () => FIREBASE_AUTH.signOut()
                  : () => handlePress(item.title)
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default NavigationMenu;
