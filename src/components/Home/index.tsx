import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native'
import { Header } from '../Header'
import Icon from 'react-native-vector-icons/AntDesign'
import { Task } from '../Tasks'
import { styles } from './style'
import React from 'react'
import { useTasks } from '../../hooks/useTasks'

const Clipboard = require('../../../assets/Clipboard.png')

export function Home() {
  const { addNewTask, newTaskText, setNewTaskText, tasks } = useTasks()

  const qtdTasks = tasks!.length
  const qtdCompletedTasks = tasks.filter(
    (task) => task.isCompleted === true,
  ).length

  function handleAddNewTask(title: string) {
    addNewTask(title)
  }

  const PlusCircle = <Icon name="pluscircleo" size={16} color={'#fff'} />
  return (
    <>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={'#808080'}
          placeholder="Add new taks"
          style={styles.input}
          onChangeText={setNewTaskText}
          value={newTaskText}
        />
        <TouchableOpacity
          style={[
            styles.button,
            newTaskText.trim() === '' && styles.disabledButton,
          ]}
          disabled={newTaskText.trim() === ''}
          onPress={() => handleAddNewTask(newTaskText)}
        >
          {PlusCircle}
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.labelContainer}>
          <View style={styles.counterContainer}>
            <Text style={styles.labelItem}>Created</Text>
            <Text style={styles.counterItem}>{qtdTasks}</Text>
          </View>
          <View style={styles.counterContainer}>
            <Text style={styles.labelItem}>Conclude</Text>
            <Text style={styles.counterItem}>{qtdCompletedTasks}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Task
              id={item.id}
              key={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.mainContainerWithoutTasks}>
              <Image source={Clipboard} alt="ClipboardImage" />
              <Text style={styles.listEmptyText}>You don have tasks!</Text>
              <Text style={styles.listEmptyTextItem}>
                Create bew tasks and organize your todo itens
              </Text>
            </View>
          )}
        />
      </View>
    </>
  )
}
