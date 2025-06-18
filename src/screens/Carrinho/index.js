import React, { useState } from 'react';
import { Container, Title, ItemBox, ItemText, PaymentTitle, PaymentOption, PaymentOptionText, FinalizeButton, FinalizeButtonText } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppLayout from "../../../components/AppLayout";
import { ToastAndroid, Linking } from 'react-native';

export default function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedProduct = route.params?.product;

  const [payment, setPayment] = useState(null);

  

const handleFinalize = () => {
  if (!payment) {
    ToastAndroid.show('Escolha uma forma de pagamento', ToastAndroid.SHORT);
    return;
  }

  // Mostra a mensagem de sucesso
  ToastAndroid.show('Compra realizada com sucesso!', ToastAndroid.SHORT);

  setTimeout(() => { 
    const message = `Olá! Gostaria de comprar:\n\nProduto: ${selectedProduct.name}\nPreço: ${selectedProduct.price}\nForma de pagamento: ${payment}`;
    const url = `https://wa.me/5579998010565?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          ToastAndroid.show('WhatsApp não encontrado.', ToastAndroid.SHORT);
        }
      })
      .catch((err) => {
        console.error('Erro ao abrir WhatsApp:', err);
        ToastAndroid.show('Erro ao abrir o WhatsApp.', ToastAndroid.SHORT);
      });
  }, 1500); 
};


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
