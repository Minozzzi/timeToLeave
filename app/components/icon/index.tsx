import { useMemo } from 'react'

import { IconProps } from 'phosphor-react-native'

import { type Icons, icons } from '@/icons'

type Props = IconProps & {
  icon: Icons
}

export const Icon: React.FC<Props> = ({ icon, ...rest }) => {
  const SelectedIcon = useMemo(() => icons[icon], [icon])

  return <SelectedIcon {...rest} />
}
