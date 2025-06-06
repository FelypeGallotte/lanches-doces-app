import React from "react";
import { Container, Btn, BtnText } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function TopButtons() {
  return (
    <Container>
      <Btn>
        <Ionicons name="time" size={16} />
        <BtnText>History</BtnText>
      </Btn>
      <Btn>
        <Ionicons name="person" size={16} />
        <BtnText>Contact</BtnText>
      </Btn>
      <Btn>
        <MaterialIcons name="receipt" size={16} />
        <BtnText>Orders</BtnText>
      </Btn>
    </Container>
  );
}