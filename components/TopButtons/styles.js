import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  padding: 6px 55px;
  border-radius: 6px;
`;

export const BtnText = styled.Text`
  margin-left: 5px;
`;