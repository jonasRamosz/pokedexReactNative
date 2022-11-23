import { useEffect, useState } from 'react'
import { FlatList, View, Image, Dimensions } from 'react-native'
import { Button, Text, TextInput, IconButton } from 'react-native-paper'
import useDatabase from '../database'
import styles from '../styles'
const {width,height} = Dimensions.get('window')

function TimePokemon() {
  const [pokemons, setpokemons] = useState([])
  const [pokemon, setpokemon] = useState('')
  const [pokemon2,setpokemon2] = useState('')
  const [pokemon3,setpokemon3] = useState('')
  const [pokemon4,setpokemon4] = useState('')
  const [pokemon5,setpokemon5] = useState('')
  const [pokemon6,setpokemon6] = useState('')
  const { initDb, findAll, insert, delet } = useDatabase()

  useEffect(() => {
    search()
  }, [])

  function search() {
    findAll().then(({ _array }) => setpokemons(_array))
  }

  function save() {
    insert(pokemon)
    insert(pokemon2)
    insert(pokemon3)
    insert(pokemon4)
    insert(pokemon5)
    insert(pokemon6)
    setpokemon('')
    setpokemon2('')
    setpokemon3('')
    setpokemon4('')
    setpokemon5('')
    setpokemon6('')
    search()
    console.log(pokemons)
  }

  function del() {
    delet(pokemon)
    delet(pokemon2)
    delet(pokemon3)
    delet(pokemon4)
    delet(pokemon5)
    delet(pokemon6)
    setpokemon('')
    setpokemon2('')
    setpokemon3('')
    setpokemon4('')
    setpokemon5('')
    setpokemon6('')
    search()
    console.log(pokemons)
  }


  return (<View style={styles.container}>
    
    <View style={[styles.horizontal]}>
      
    

    <IconButton
    icon="play"
    mode='contained'
    size={40}
    color='purple'
    onPress={function () {
      initDb()
      search()
    }}
  />
  
      <IconButton
    icon="plus-circle"
    mode='contained'
    size={40}
    color='purple'
    onPress={save}
  />


<IconButton
    icon="delete"
    mode='contained'
    size={40}
    color='purple'
    onPress={del}
  />


      
    </View>
    
    
    
    <View style={[styles.textHorizontal]}>
      <TextInput style={[styles.tamanhoInput]}
        placeholder='ID do 1° pokemom'
        onChangeText={text => setpokemon(text)}
        value={pokemon}
      />
      <TextInput style={styles.tamanhoInput}
        placeholder='ID do 2° pokemom'
        onChangeText={text => setpokemon2(text)}
        value={pokemon2}
      />
    </View>
    
    <View style={[styles.textHorizontal]}>
    <TextInput style={[styles.tamanhoInput]}
      placeholder='ID do 3° pokemom'
      onChangeText={text => setpokemon3(text)}
      value={pokemon3}
      />
    <TextInput style={[styles.tamanhoInput]}
      placeholder='ID do 4° pokemom'
      onChangeText={text => setpokemon4(text)}
      value={pokemon4}
    />
    </View>

    <View style={[styles.textHorizontal]}>
    <TextInput style={[styles.tamanhoInput]}
      placeholder='ID do 5° pokemom'
      onChangeText={text => setpokemon5(text)}
      value={pokemon5}
    />
    <TextInput style={[styles.tamanhoInput]}
      placeholder='ID do 6° pokemom'
      onChangeText={text => setpokemon6(text)}
      value={pokemon6}
      />
    </View>

    
    <FlatList
      showsVerticalScrollIndicator={false}
      data={pokemons}
      style={{ width: 400, height: 400 }}
      
      renderItem={({ item }) => {
        return(
          
          <View style={{flex : 1}}>
            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.nome}.png` }} 
            style={{width:width - 50,height:width}}/>
          </View>
        )
      }
      }
      keyExtractor={item => item.id}
    />

  </View>)
}

export default TimePokemon