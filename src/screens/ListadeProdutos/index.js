import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const produtos = [
  {
    id: "1",
    nome: "Brigadeiro",
    valor: 2.00,
    promocional: 1.49,
  },
  {
    id: "2",
    nome: "Bolo de Cenoura",
    valor: 15.00,
    promocional: 10.50,
  },
  {
    id: "3",
    nome: "Pastel",
    valor: 5.99,
    promocional: 4.99,
  },
];

export default function ListaProdutosScreen() {
  const navigation = useNavigation();

  const irParaPagamento = (produto) => {
    navigation.navigate('Carrinho', {
      product: {
        name: produto.nome,
        price: `R$ ${produto.promocional.toFixed(2)}`
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Doces e Lanches</Text>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.valor}>
                <Text style={styles.original}>R$ {item.valor.toFixed(2)} </Text>
                <Text style={styles.promocional}>R$ {item.promocional.toFixed(2)}</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => irParaPagamento(item)}
            >
              <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}