import { useMemo } from 'react'

import { IconProps } from '@phosphor-icons/react'

import { type Icons, icons } from '@/icons'

type Props = IconProps & {
  icon: Icons
}

export const Icon: React.FC<Props> = ({ icon, ...rest }) => {
  const SelectedIcon = useMemo(() => icons[icon], [icon])

  return <SelectedIcon {...rest} />
}
