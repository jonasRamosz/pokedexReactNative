import axios from 'axios'
import React, { useState } from 'react'
import { View, Image,Dimensions } from 'react-native'
import { Button, Card, Text, TextInput,IconButton } from 'react-native-paper'
import styles from '../styles'
const {width,height} = Dimensions.get('window')


function PokeDex() {
  const [pokemom, setPOKEMOM] = useState({})
  const [id, setID] = useState('')

  function buscaPOKEMOM() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function ({ data, status }) {
        if (status === 200) setPOKEMOM(data)
        else setPOKEMOM({})
      })
      .catch(function (err) {
        setPOKEMOM({})
      })
  }

  return (
    <View style={[styles.container]}>
      <Card>
        <Card.Title title='Informe o ID ou nome do Pokemom' subtitle='Busque o PokeMon pelo ID/nome' />
        <Card.Content>
          <TextInput
            placeholder='Pokemom/ID'
            label='Pokemom/ID'
            onChangeText={function (text) {
              setID(text)
            }}
            right={
              <TextInput.Icon
                  icon="magnify-expand"
                  color="purple"
                  mode='contained'
                  size={40}
                  onPress={buscaPOKEMOM}
              />

            }

          />
        </Card.Content>
        <Card.Actions>
          
        </Card.Actions>
      </Card>

      <Card style={{ marginTop: 32 }}>
        <Card.Content>
          <Text style={{fontSize:20}}> {pokemom.id}</Text>
          <Text style={{fontSize:35}}> {pokemom.name} </Text>
          <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemom.id}.png` }} 
            style={{width:width - 50,height:width}}/>
        </Card.Content>
      </Card>
    </View>
  )
}

export default PokeDex