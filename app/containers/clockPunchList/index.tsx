import React from 'react'

import { FlatList } from 'react-native'

import {
  Container,
  Header,
  Title,
  Counter,
  NotFoundMessage,
  NotFoundContainer
} from './styles'
import { useClockPunchList } from './useClockPunchList'
import { ClockPunchContainer } from '../clockPunch'
import { Tab } from '@/components'
import { formatDate } from '@/utils/dates'

export const ClockPunchList = () => {
  const {
    clockPunches,
    index,
    setIndex,
    routes,
    firstRender,
    layout,
    timeLeft
  } = useClockPunchList()

  return (
    <Container>
      <Header>
        <Title>Entradas e Saídas</Title>
        <Counter>{clockPunches.length}</Counter>
      </Header>

      {clockPunches.length ? (
        <Tab
          navigationState={{ index, routes }}
          renderScene={({ route, jumpTo }) => {
            if (firstRender.current) {
              const lastRoute = routes.at(-1) || routes[0]
              jumpTo(lastRoute?.key)
              firstRender.current = false
            }

            const data = clockPunches.filter(
              item =>
                formatDate({
                  date: item.created_at,
                  formatter: 'dd/MM'
                }) === route.title
            )

            return (
              <FlatList
                key={route.key}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <ClockPunchContainer key={item.id} data={item} />
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
              />
            )
          }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      ) : (
        <NotFoundContainer>
          <NotFoundMessage style={{ marginTop: 20 }}>
            Nenhum registro encontrado
          </NotFoundMessage>
        </NotFoundContainer>
      )}

      <Title>Horas para trabalhar: {timeLeft}</Title>
    </Container>
  )
}
