import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  justify-content: center;
  padding: 20px;
  background-color: #fff;
`;

export const Description = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #333;
`;
