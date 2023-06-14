import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import { Container, Title, Load } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export const Button: React.FC<Props> = ({
  title,
  isLoading = false,
  ...rest
}) => (
  <Container disabled={isLoading} {...rest}>
    {isLoading ? <Load /> : <Title>{title}</Title>}
  </Container>
)
