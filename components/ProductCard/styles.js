import styled from "styled-components/native";

export const Card = styled.View`
  width: 160px;
  background-color: #fff;
  margin: 12px 8px;
  border-radius: 12px;
  overflow: hidden;
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100px;
`;

export const Brand = styled.Text`
  color: gray;
  font-size: 12px;
  margin: 6px 8px 0px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 2px 8px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  margin: 2px 8px 8px;
  color: #222;
`;