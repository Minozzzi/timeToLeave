import React, { useMemo } from 'react'

import { TaskManager } from './components/TaskManager'
import { TaskRealmContext } from './models'
import { Task } from './models/Task'

const { useQuery } = TaskRealmContext

export const AppNonSync = () => {
  const result = useQuery(Task)

  const tasks = useMemo(() => result.sorted('createdAt'), [result])

  return <TaskManager tasks={tasks} />
}
