import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ItemBox = styled.View`
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const PaymentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PaymentOption = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ selected }) => (selected ? '#f5a623' : '#eee')};
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const PaymentOptionText = styled.Text`
  font-size: 16px;
`;

export const FinalizeButton = styled.TouchableOpacity`
  margin-top: 30px;
  padding: 15px;
  background-color: green;
  border-radius: 8px;
  align-items: center;
`;

export const FinalizeButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
