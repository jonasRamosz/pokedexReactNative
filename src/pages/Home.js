import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import styles from '../styles'

function Home() {
  const navigation = useNavigation()

  return (
    <View style={[styles.container]}>
      <Button
        mode='contained'
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate('PokeDex')}
      >
        PokeDex
      </Button>
      <Button
        mode='contained'
        style={{ marginTop: 16 }}
        onPress={() => navigation.navigate('TimePokemon')}
      >
        TIME POKEMON
      </Button>
      
    </View>
  )
}

export default Home