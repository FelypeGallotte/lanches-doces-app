import React from "react";
import { Container, NavButton } from "./styles";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <Container>
      <NavButton>
        <Ionicons name="home" size={22} />
      </NavButton>
      <NavButton>
        <Feather name="shopping-cart" size={22} />
      </NavButton>
      <NavButton>
        <Ionicons name="notifications-outline" size={22} />
      </NavButton>
      <NavButton>
        <Feather name="search" size={22} />
      </NavButton>
    </Container>
  );
}