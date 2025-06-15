import React from "react";
import { Wrapper, Container, ImageCircle, Label } from "./styles";

export default function CategoryItem({ title, image, onPress }) {
  return (
    <Wrapper onPress={onPress}>
      <Container>
        <ImageCircle source={image} />
        <Label>{title}</Label>
      </Container>
    </Wrapper>
  );
}