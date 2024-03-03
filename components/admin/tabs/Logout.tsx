import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../assets/styles/colors";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

const Logout = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text>Are you sure you want to logout?</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable
              style={{
                backgroundColor: COLORS.primary,
                paddingVertical: 8,
                paddingHorizontal: 15,
              }}
              onPress={() => FIREBASE_AUTH.signOut()}
            >
              <Text style={{ color: COLORS.white }}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
