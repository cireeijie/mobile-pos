import { View } from "react-native";
import React, { useEffect, useState } from "react";
import NavigationMenu from "../../components/admin/navigation/NavigationMenu";
import MenuContent from "../../components/admin/navigation/MenuContent";
import { navigationMenuContext } from "../../context/useContext";

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState(
    navigationMenuContext.activeMenu[0]
  );

  useEffect(() => {
    const subscription = navigationMenuContext.subscribe(() => {
      setActiveMenu(navigationMenuContext.activeMenu[0]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <NavigationMenu />
        {activeMenu && activeMenu.component && (
          <MenuContent Component={<activeMenu.component />} />
        )}
      </View>
    </View>
  );
};

export default Admin;
