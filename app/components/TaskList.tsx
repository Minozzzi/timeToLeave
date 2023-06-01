import React from 'react'

import { Realm } from '@realm/react'
import { View, FlatList, StyleSheet } from 'react-native'

import { TaskItem } from './TaskItem'
import { Task } from '../models/Task'

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})

type TaskListProps = {
  tasks: Realm.Results<Task & Realm.Object>
  onToggleTaskStatus: (task: Task & Realm.Object) => void
  onDeleteTask: (task: Task & Realm.Object) => void
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTaskStatus,
  onDeleteTask
}) => (
  <View style={styles.listContainer}>
    <FlatList
      data={tasks}
      keyExtractor={task => task.id.toString()}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggleStatus={() => onToggleTaskStatus(item)}
          onDelete={() => onDeleteTask(item)}
          // Don't spread the Realm item as such: {...item}
        />
      )}
    />
  </View>
)

export default TaskList
