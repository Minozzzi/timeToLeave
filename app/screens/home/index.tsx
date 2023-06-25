import React from 'react'

import { Container } from './styles'
import { Button, Header } from '@/components'
import { ClockPunchList } from '@/containers'
import { useAppNavigation } from '@/hooks'

export const Home: React.FC = () => {
  const { navigate } = useAppNavigation()

  return (
    <Container>
      <Header />

      <ClockPunchList />

      <Button
        title="Nova entrada/saída"
        onPress={() => navigate('NewClockPunchScreen')}
      />
    </Container>
  )
}
