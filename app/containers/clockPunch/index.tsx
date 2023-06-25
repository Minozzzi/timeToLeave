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
  id: string
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
            Entrada: {formatDate({ date: data.entrance, formatter: 'HH:mm' })}
          </Title>
          <Title>
            Saída: {formatDate({ date: data.exit, formatter: 'HH:mm' })}
          </Title>
        </Header>

        <Footer>
          <Info>
            <Calendar color={theme.COLORS.SUBTEXT} size={16} />
            <Label>
              Criado em:{' '}
              {formatDate({
                date: data.created_at,
                formatter: 'dd/MM - HH:mm'
              })}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  )
}
