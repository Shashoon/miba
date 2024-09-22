import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Portal, Modal, Text, ModalProps } from "react-native-paper";
import SecondaryButton from "../buttons/SecondaryButton";

interface PrimaryModalProps {
  visible: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}

const PrimaryModal: React.FC<PrimaryModalProps> = ({
  visible,
  onDismiss,
  children,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        {children}
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 30,
    margin: 20,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});

export default PrimaryModal;
