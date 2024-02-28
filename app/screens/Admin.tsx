import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { userContext } from "../../context/exportContext";
import Settings from "../../components/admin/Settings";
import { defaults } from "../../assets/styles/exports";
import NavigationMenu from "../../components/admin/navigation/NavigationMenu";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Admin = ({ navigation }: RouterProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <NavigationMenu />
        <View style={{flex: 1}}>
          <Text>Welcome {userContext.userInfo.email}!</Text>
          <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
          <Settings />
        </View>
      </View>
    </View>
  );
};

export default Admin;
