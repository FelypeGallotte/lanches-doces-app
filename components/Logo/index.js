import React from 'react';
import { LogoContainer, LogoImage } from './styles';
import logoImg from '../../assets/logo.png';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage source={logoImg} resizeMode="contain" />
    </LogoContainer>
  );
}