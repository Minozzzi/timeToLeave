import { ClockPunchContainerProps } from '../clockPunch'
import { useQuery } from '@/models'
import { ClockPunch } from '@/models/ClockPunch'

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

  return {
    clockPunches
  }
}
