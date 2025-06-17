import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ProfileImage = styled.Image`
  width: 180px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ContactText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;
