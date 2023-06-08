import { ReactNode, createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'

export interface Tasks {
  id: number
  title: string
  isCompleted: boolean
}

interface TasksProviderProps {
  children: ReactNode
}
interface TasksContextProps {
  tasks: Tasks[]
  newTaskText: string
  setNewTaskText: (title: string) => void
  updateTask: (id: number) => void
  removeTask: (id: number) => void
  addNewTask: (title: string) => void
}

const TaskContext = createContext<TasksContextProps>({} as TasksContextProps)

export function TaskProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function addNewTask() {
    const taskAlreadyExists = tasks.some((task) => {
      return task.title === newTaskText
    })
    if (taskAlreadyExists) {
      return Alert.alert('Error ❌', 'Task Already exitis, Choose another name')
    }
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: newTaskText,
      isCompleted: false,
    }
    setTasks((item) => [...item, newTask])
    setNewTaskText('')
  }
  function removeTask(id: number) {
    Alert.alert('Sure?', `U Really want to remove this task ⚠️  ?`, [
      {
        text: 'Yes',
        onPress: () => {
          const tasksWithoutDeletedOne = tasks!.filter((task) => task.id !== id)
          setTasks(tasksWithoutDeletedOne)
          Alert.alert('Deleted ⚠️')
        },
      },
      { text: 'No', style: 'cancel' },
    ])
  }
  function updateTask(id: number) {
    const completedTasks = tasks!.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(completedTasks)
  }
  return (
    <TaskContext.Provider
      value={{
        addNewTask,
        newTaskText,
        removeTask,
        updateTask,
        tasks,
        setNewTaskText,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks(): TasksContextProps {
  const context = useContext(TaskContext)
  return context
}
