import React from 'react'

import { Greeting, Title, SubTitle } from './styles'

export const Header: React.FC = () => (
  <Greeting>
    <Title>Time to leave</Title>
    <SubTitle>Saiba a hora de sair do trabalho.</SubTitle>
  </Greeting>
)
