import React from "react";
import { Card, ProductImage, ProductTitle, ProductPrice, Brand } from "./styles";

export default function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage source={product.image} resizeMode="cover" />
      <Brand>Brand</Brand>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>{product.price}</ProductPrice>
    </Card>
  );
}