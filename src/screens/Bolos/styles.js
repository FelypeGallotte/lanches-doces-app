import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  background-color: #fff;
`;

export const ItemCard = styled.View`
  padding: 20px;
  margin-bottom: 15px;
  background-color: #f0f4ff;
  border-radius: 10px;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  color: #444;
`;
