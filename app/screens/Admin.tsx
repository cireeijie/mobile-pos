import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { userContext } from "../../context/exportContext";
import Settings from "../../components/admin/Settings";
import { defaults } from "../../assets/styles/exports";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Admin = ({ navigation }: RouterProps) => {
  return (
    <View>
      <Text>Welcome {userContext.userInfo.email}!</Text>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
      <Settings />
    </View>
  );
};

export default Admin;
