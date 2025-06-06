import React from "react";
import { ScrollView } from "react-native";
import { Container, Title } from "./styles";
import TopButtons from "../components/TopButtons";
import CategoryItem from "../components/CategoryItem";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import Logo from '../components/Logo';

const categories = [
  { title: "Salgados", image: require("../assets/salgados.png") },
  { title: "Doces", image: require("../assets/doces.png") },
  { title: "Bolos", image: require("../assets/bolos.png") },
];

const products = [
  {
    id: "1",
    name: "Bolo Chocolate P",
    price: "$15.00",
    image: require("../assets/bolo.png"),
  },
  {
    id: "2",
    name: "Enroladinho de Salsicha M",
    price: "$4.99",
    image: require("../assets/enroladinho.png"),
  },
  {
    id: "3",
    name: "Pastel",
    price: "$5.99",
    image: require("../assets/pastel.png"),
  },
];

export default function Main() {
  return (
    <Container>
      <Logo />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TopButtons />

        <Title>Menu</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <CategoryItem key={index} title={item.title} image={item.image} />
          ))}
        </ScrollView>

        <Title>Produtos</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ScrollView>
      </ScrollView>

      <BottomNav />
    </Container>
  );
}
