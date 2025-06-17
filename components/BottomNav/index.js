import React from "react";
import { Container, NavButton } from "./styles";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 

export default function BottomNav() {
  const navigation = useNavigation();
  return (
    <Container>
      <NavButton>
        <Ionicons onPress={() => navigation.navigate("Main")} name="home" size={22} />
      </NavButton>
      <NavButton>
        <Feather onPress={() => navigation.navigate("Carrinho")} name="shopping-cart" size={22} />
      </NavButton>
      <NavButton>
        <Ionicons onPress={() => navigation.navigate("Notificacoes")} name="notifications-outline" size={22} />
      </NavButton>
    </Container>
  );
}