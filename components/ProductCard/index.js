import React from "react";
import { Card, ProductImage, ProductTitle, ProductPrice, Brand, BuyButton, BuyButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();

  const handleBuy = () => {
    navigation.navigate("Carrinho", { product }); 
  };

  return (
    <Card>
      <ProductImage source={product.image} resizeMode="cover" />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>{product.price}</ProductPrice>
      <BuyButton onPress={handleBuy}>
        <BuyButtonText >Comprar</BuyButtonText>
      </BuyButton>
    </Card>
  );
}
