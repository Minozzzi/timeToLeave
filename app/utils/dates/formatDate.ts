import { format } from 'date-fns'

type FormatDate = (params: { date: Date; formatter: string }) => string

export const formatDate: FormatDate = ({ date, formatter }) =>
  format(date, formatter)
