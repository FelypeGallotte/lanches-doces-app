import React from 'react';
import { Container, ProfileImage, Title, ContactText } from './styles';

export default function Contact() {
  return (
    <Container>
      <ProfileImage source={require('../../../assets/logo.png')} />
      <Title>Doces da Elô</Title>
      <ContactText>WhatsApp: (21) 98765-4321</ContactText>
      <ContactText>Email: docesdaelo@gmail.com</ContactText>
    </Container>
  );
}