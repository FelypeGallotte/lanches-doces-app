import React from "react";
import { Container, Btn, BtnText } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 

export default function TopButtons() {
  const navigation = useNavigation(); 

  return (
    <Container>
      <Btn onPress={() => console.log("Histórico ainda não implementado")}>
        <Ionicons name="time" size={16} />
        <BtnText>History</BtnText>
      </Btn>

      <Btn onPress={() => navigation.navigate("Contact")}>
        <Ionicons name="person" size={16} />
        <BtnText>Contact</BtnText>
      </Btn>

      <Btn onPress={() => navigation.navigate("Orders")}>
        <MaterialIcons name="receipt" size={16} />
        <BtnText>Orders</BtnText>
      </Btn>
    </Container>
  );
}