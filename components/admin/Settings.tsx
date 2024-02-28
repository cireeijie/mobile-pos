import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../assets/styles/colors";
import { defaults } from "../../assets/styles/exports";
import { userContext } from "../../context/exportContext";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  const [modalVisibility, setModalVisibility] = useState(
    userContext.userInfo.displayName === null ? true : false
  );

  return (
    <View style={defaults.modalContainer}>
      <Modal
        style={defaults.modalContainer}
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={defaults.modal}>
            <Text>Settings</Text>
            <TextInput
              style={defaults.input}
              value={username}
              placeholderTextColor={COLORS.darkGray}
              placeholder="Full name"
              autoCapitalize="none"
              onChangeText={(text) => setUsername(text)}
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default Settings;
