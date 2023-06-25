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
  <Container testID="button" disabled={isLoading} {...rest}>
    {isLoading ? <Load testID="loading" /> : <Title>{title}</Title>}
  </Container>
)
