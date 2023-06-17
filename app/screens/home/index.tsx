import React from 'react'

import { Container } from './styles'
import { Button, Header } from '@/components'
import { ClockPunchList } from '@/containers'

export const Home: React.FC = () => (
  <Container>
    <Header />

    <ClockPunchList />

    <Button title="Nova entrada/saída" onPress={() => null} />
  </Container>
)
