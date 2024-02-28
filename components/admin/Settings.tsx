import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Button,
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
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View style={defaults.modalContainer}>
          <KeyboardAvoidingView behavior="padding">
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
              <Button
                title="Cancel"
                onPress={() => setModalVisibility(false)}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;
