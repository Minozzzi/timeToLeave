import React from 'react'

import { FlatList } from 'react-native'

import { Container, Header, Title, Counter } from './styles'
import { useClockPunchList } from './useClockPunchList'
import { ClockPunchContainer } from '../clockPunch'

export const ClockPunchList = () => {
  const { clockPunches } = useClockPunchList()

  return (
    <Container>
      <Header>
        <Title>Entradas e Saídas</Title>
        <Counter>{clockPunches.length}</Counter>
      </Header>

      <FlatList
        data={clockPunches}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ClockPunchContainer data={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
    </Container>
  )
}
