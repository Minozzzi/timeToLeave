import React from 'react'

import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import {
  Container,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer
} from './styles'
import { icons } from '@/icons'
import { formatDate } from '@/utils/dates'

export type ClockPunchContainerProps = {
  _id: string
  entrance: Date
  exit: Date
  created_at: Date
}

type Props = PressableProps & {
  data: ClockPunchContainerProps
}

export const ClockPunchContainer = ({ data, ...rest }: Props) => {
  const theme = useTheme()
  const { Calendar } = icons

  return (
    <Container {...rest}>
      <Content>
        <Header>
          <Title>
            {formatDate({ date: data.entrance, formatter: 'HH:MM' })}
          </Title>
          <Title>{formatDate({ date: data.exit, formatter: 'HH:MM' })}</Title>
        </Header>

        <Footer>
          <Info>
            <Calendar name="calendar" color={theme.COLORS.SUBTEXT} size={16} />
            <Label>
              {formatDate({
                date: data.created_at,
                formatter: 'DD/MM - HH:MM'
              })}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  )
}
