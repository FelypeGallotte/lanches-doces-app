import React from 'react';
import { FlatList } from 'react-native';
import { Container, ItemCard, ItemText } from './styles';

const doces = ['Brigadeiro', 'Beijinho', 'Palha Italiana', 'Bala de coco'];

export default function Doces() {
  return (
    <Container>
      <FlatList
        data={doces}
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
