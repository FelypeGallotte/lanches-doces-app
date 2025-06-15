import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, ItemCard, ItemText } from './styles';

const salgados = ['Coxinha', 'Pastel', 'Empada'];

export default function Salgados() {
  return (
    <Container>
      <FlatList
        data={salgados}
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