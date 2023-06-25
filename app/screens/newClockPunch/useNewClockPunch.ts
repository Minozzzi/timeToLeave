import { useCallback, useState } from 'react'

import Toast from 'react-native-toast-message'

import { FormData } from './types'
import { useAppNavigation } from '@/hooks'
import { useRealm } from '@/models'
import { ClockPunch } from '@/models/ClockPunch'

export const useNewClockPunch = () => {
  const { goBack } = useAppNavigation()
  const realm = useRealm()

  const [formData, setFormData] = useState<FormData>({
    entrance: new Date(),
    exit: new Date()
  })

  const handleCreate = useCallback(() => {
    const { entrance, exit } = formData

    if (!entrance || !exit) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar o registro',
        text2: 'Preencha todos os campos'
      })
      return
    }

    realm.write(() => {
      realm.create(
        'ClockPunch',
        ClockPunch.generate({
          entrance,
          exit
        })
      )

      goBack()
    })
  }, [formData, goBack, realm])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return {
    formData,
    setFormData,
    handleCreate,
    handleGoBack
  }
}
