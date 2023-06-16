import React from 'react'

import { Container, Greeting, Title, SubTitle } from './styles'
import { IconButton } from '../iconButton'

export const Header: React.FC = () => (
  <Container>
    <Greeting>
      <Title>Time to leave</Title>
      <SubTitle>Saiba a hora de sair do trabalho.</SubTitle>
    </Greeting>

    <IconButton icon="SignOut" />
  </Container>
)
