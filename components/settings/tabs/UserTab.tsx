import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../assets/styles/colors";
import { userContext } from "../../../context/useContext";

const UserTab = () => {
  const [editInfo, setEditInfo] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(userContext.userInfo.email);
  const [password, setPassword] = useState("Not your real password");

  return (
    <View
      style={{ backgroundColor: COLORS.white, height: "100%", padding: 20 }}
    >
      <View style={styles.formGroup}>
        <View style={styles.formHeader}>
          <Text style={{ fontFamily: "Inter-Bold" }}>Profile</Text>
          {editInfo ? (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable>Save</Pressable>
              <Pressable
                style={styles.secondaryBtn}
                onPress={() => setEditInfo(false)}
              >
                Cancel
              </Pressable>
            </View>
          ) : (
            <View>
              <Pressable
                style={styles.secondaryBtn}
                onPress={() => setEditInfo(true)}
              >
                Edit
              </Pressable>
            </View>
          )}
        </View>
        <View style={styles.formBody}>
          <View style={styles.formInputGroup}>
            <Text style={styles.formLabel}>First name</Text>
            <TextInput
              editable={editInfo}
              style={[
                { color: firstName ? "#000000" : COLORS.primary },
                styles.formInput,
              ]}
              value={firstName ? "Your name" : "Not set"}
            ></TextInput>
          </View>
          <View style={styles.formInputGroup}>
            <Text style={styles.formLabel}>Last name</Text>
            <TextInput
              style={[
                { color: lastName ? "#000000" : COLORS.primary },
                styles.formInput,
              ]}
              value={lastName ? "Your name" : "Not set"}
              aria-disabled={!editInfo}
            ></TextInput>
          </View>
          <View style={styles.formInputGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={[
                { color: email ? "#000000" : COLORS.primary },
                styles.formInput,
              ]}
              value={email ? email : "Not set"}
              aria-disabled={!editInfo}
            ></TextInput>
          </View>
          <View style={styles.formInputGroup}>
            <Text style={styles.formLabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formInput}
              value={password}
              aria-disabled={!editInfo}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserTab;

const styles = StyleSheet.create({
  formGroup: {
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.3)",
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
  },
  formBody: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
    gap: 10,
  },
  formInputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  formLabel: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    minWidth: 100,
  },
  formInput: {
    flex: 1,
    borderColor: COLORS.transparent,
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  secondaryBtn: {
    backgroundColor: COLORS.lightGray,
    fontFamily: "Inter-Semibold",
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonOnFocus: {
    borderBottomWidth: 0,
    borderColor: COLORS.transparent,
  },
});
