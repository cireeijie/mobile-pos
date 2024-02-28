import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { icons } from "../../../constants/icons";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { menus, userMenus } from "../../../constants/navigationMenu";
import MenuItem from "./MenuItem";

const NavigationMenu = () => {
  const [menu, setMenu] = useState(menus);
  const [userMenu, setUserMenus] = useState(userMenus);

  const handlePress = (title : string) => {
    const updateMenu = menu.map(item => ({
      ...item,
      isActive: item.title === title
  }));

  const updateUserMenu = userMenu.map(item => ({
    ...item,
    isActive: item.title === title
}));

  setMenu(updateMenu);
  setUserMenus(updateUserMenu);
  }

  return (
    <View>
      <View style={{flex: 1, alignItems: 'center'}}>
        {
          menu.map(item => {
            return <MenuItem key={`menu-${item.title}`} title={item.title} icon={item.icons} isActive={item.isActive} showTitle={false} menuFunction={() => handlePress(item.title)}/>
          })
        }
      </View>
      <View>
      {
          userMenu.map(item => {
            return <MenuItem key={`menu-${item.title}`} title={item.title} icon={item.icons} isActive={item.isActive} showTitle={false} menuFunction={item.title === 'Logout' ? ()=> FIREBASE_AUTH.signOut() : () => handlePress(item.title)}/>
          })
        }
      </View>
    </View>
  );
};

export default NavigationMenu;
