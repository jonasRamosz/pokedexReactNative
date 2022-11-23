import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import PokeDex from './src/pages/PokeDex.js'
import Home from './src/pages/Home.js'
import TimePokemon from './src/pages/SQLite'


const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokeDex" component={PokeDex} />
        <Stack.Screen name="TimePokemon" component={TimePokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App