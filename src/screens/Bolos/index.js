import React from 'react';
import { FlatList } from 'react-native';
import { Container, ItemCard, ItemText } from './styles';

const bolos = ['Bolo de Chocolate', 'Bolo de Cenoura', 'Bolo de Fubá', 'Bolo de Coco'];

export default function Bolos() {
  return (
    <Container>
      <FlatList
        data={bolos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ItemCard>
            <ItemText>{item}</ItemText>
          </ItemCard>
        )}
      />
    </Container>
  );
}
