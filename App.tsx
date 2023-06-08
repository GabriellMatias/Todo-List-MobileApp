import { View, StatusBar } from 'react-native'
import { Home } from './src/components/Home'
import React from 'react'
import { TaskProvider } from './src/hooks/useTasks'

export default function App() {
  return (
    <TaskProvider>
      <View style={{ backgroundColor: '#191919', flex: 1 }}>
        <StatusBar barStyle={'light-content'} translucent />
        <Home />
      </View>
    </TaskProvider>
  )
}
