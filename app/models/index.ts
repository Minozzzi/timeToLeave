import { createRealmContext } from '@realm/react'

import { ClockPunch } from './ClockPunch'

export const { RealmProvider, useRealm, useQuery } = createRealmContext({
  schema: [ClockPunch]
})
