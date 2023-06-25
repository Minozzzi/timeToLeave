import { useMemo, useRef, useState } from 'react'

import { useWindowDimensions } from 'react-native'

import { ClockPunchContainerProps } from '../clockPunch'
import { useQuery } from '@/models'
import { ClockPunch } from '@/models/ClockPunch'
import { formatDate } from '@/utils/dates'

export const useClockPunchList = () => {
  const result = useQuery(ClockPunch)
  const clockPunches = result.sorted('createdAt').map(
    (clockPunch): ClockPunchContainerProps => ({
      // eslint-disable-next-line no-underscore-dangle
      id: clockPunch._id.toHexString(),
      entrance: clockPunch.entrance,
      exit: clockPunch.exit,
      created_at: clockPunch.createdAt
    })
  )

  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)
  const routes = useMemo(() => {
    const days = clockPunches.map(item =>
      formatDate({
        date: item.created_at,
        formatter: 'dd/MM'
      })
    )

    return [...new Set(days)].slice(-3).map(item => ({
      key: item,
      title: item
    }))
  }, [clockPunches])

  const firstRender = useRef(true)

  const timeLeft = useMemo(() => {
    const hoursToWork = 8

    const today = new Date()
    const todayClockPunches = clockPunches.filter(
      item =>
        item.created_at.getDate() === today.getDate() &&
        item.created_at.getMonth() === today.getMonth() &&
        item.created_at.getFullYear() === today.getFullYear()
    )

    if (todayClockPunches.length === 0) {
      return '00:00'
    }

    const totalWorkedHours = todayClockPunches.reduce(
      (accumulator, currentValue) => {
        const entrance = new Date(currentValue.entrance)
        const exit = new Date(currentValue.exit)

        const workedHours =
          (exit.getTime() - entrance.getTime()) / 1000 / 60 / 60

        return accumulator + workedHours
      },
      0
    )

    const timeLeftInHours = hoursToWork - totalWorkedHours

    const hours = Math.floor(timeLeftInHours)
    const minutes = Math.ceil((timeLeftInHours - hours) * 60)

    if (hours < 0 || minutes < 0) {
      return '00:00'
    }

    return `${hours}:${minutes}`
  }, [clockPunches])

  return {
    clockPunches,
    layout,
    index,
    setIndex,
    routes,
    firstRender,
    timeLeft
  }
}
