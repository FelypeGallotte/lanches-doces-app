import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

const promocoes = [
  {
    id: "1",
    nome: "Pastel",
    preco: 4.99,
  },
  {
    id: "2",
    nome: "Bolo de Cenoura",
    preco: 10.50,
  },
  {
    id: "3",
    nome: "Brigadeiro",
    preco: 1.49,
  },
  // adicione mais promoções conforme quiser
];

export default function NotificacoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lanches em Promoção</Text>
      <FlatList
        data={promocoes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "#f5a623", marginTop: isAndroid ? StatusBar.currentHeight : 0,
 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    elevation: 2,
  },
  nome: { fontSize: 18, fontWeight: "600" },
  preco: { fontSize: 16, color: "#249c3d", fontWeight: "bold" },
});