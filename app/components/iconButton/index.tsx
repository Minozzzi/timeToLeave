import React from 'react'

import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'
import { Icon } from '../icon'
import { type Icons } from '@/icons'

type Props = TouchableOpacityProps & {
  icon: Icons
}

export const IconButton: React.FC<Props> = ({ icon, ...rest }) => {
  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <Icon icon={icon} size={18} color={COLORS.WHITE} />
    </Container>
  )
}
