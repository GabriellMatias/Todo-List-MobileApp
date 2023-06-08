import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import CheckedIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './style'
import React from 'react'
import { Tasks, useTasks } from '../../hooks/useTasks'

export function Task({ title, isCompleted = false, id }: Tasks) {
  const { removeTask, updateTask } = useTasks()
  const TrashIcon = <Icon name="trash-2" size={18} color={'#808080'} />

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskItemContainer}>
        <TouchableOpacity onPress={() => updateTask(id)}>
          <CheckedIcon
            style={styles.icon}
            name={
              isCompleted
                ? 'checkbox-marked-circle'
                : 'checkbox-blank-circle-outline'
            }
            size={24}
            color={isCompleted ? '#6366f1' : '#40c4ff'}
          />
        </TouchableOpacity>
        <Text
          style={
            isCompleted ? styles.descriptionTaskCompleted : styles.description
          }
        >
          {title}
        </Text>
        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => removeTask(id)}
        >
          {TrashIcon}
        </TouchableOpacity>
      </View>
    </View>
  )
}
