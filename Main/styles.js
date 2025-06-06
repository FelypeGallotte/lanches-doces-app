import styled from "styled-components/native";

import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 16px 10px;
`;