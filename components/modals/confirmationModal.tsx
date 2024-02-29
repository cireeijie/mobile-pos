import { View, Text, Modal } from "react-native";
import React, { useState } from "react";

interface ConfirmationModalProps {
  title: string;
  message: string;
  buttonText: string;
  buttonFunction: () => void;
}

const confirmationModal = ({
  title,
  message,
  buttonText,
  buttonFunction,
}: ConfirmationModalProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Text>confirmationModal</Text>
    </Modal>
  );
};

export default confirmationModal;
