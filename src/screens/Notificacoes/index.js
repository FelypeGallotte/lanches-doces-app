import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificacoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>Compra realizada com sucesso ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  mensagem: {
    fontSize: 22,
    color: "#2e7d32",
    fontWeight: "bold",
    textAlign: "center",
  },
});