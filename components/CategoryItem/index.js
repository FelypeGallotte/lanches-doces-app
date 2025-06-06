import React from "react";
import { Container, ImageCircle, Label } from "./styles";

export default function CategoryItem({ title, image }) {
  return (
    <Container>
      <ImageCircle source={image} />
      <Label>{title}</Label>
    </Container>
  );
}