import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Title, ItemBox, ItemText, PaymentTitle, PaymentOption, PaymentOptionText, FinalizeButton, FinalizeButtonText } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppLayout from "../../../components/AppLayout";



export default function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedProduct = route.params?.product;

  const [payment, setPayment] = useState(null);

  const handleFinalize = () => {
    if (!payment) {
      Alert.alert('Escolha uma forma de pagamento');
      return;
    }

    navigation.navigate("Notificacoes", { status: "success" });
  };

  if (!selectedProduct) {
    return (
      <Container>
        <Title>Nenhum item no carrinho</Title>
      </Container>
    );
  }

  return (
    <AppLayout>

    
    <Container>
      <Title>Seu Carrinho</Title>

      <ItemBox>
        <ItemText>Produto: {selectedProduct.name}</ItemText>
        <ItemText>Preço: {selectedProduct.price}</ItemText>
      </ItemBox>

      <PaymentTitle>Forma de Pagamento:</PaymentTitle>
      <PaymentOption onPress={() => setPayment("Pix")} selected={payment === "Pix"}>
        <PaymentOptionText>Pix</PaymentOptionText>
      </PaymentOption>
      <PaymentOption onPress={() => setPayment("Dinheiro")} selected={payment === "Dinheiro"}>
        <PaymentOptionText>Dinheiro</PaymentOptionText>
      </PaymentOption>

      <FinalizeButton onPress={handleFinalize}>
        <FinalizeButtonText>Finalizar Compra</FinalizeButtonText>
      </FinalizeButton>
    </Container>
    </AppLayout>
  );
}
