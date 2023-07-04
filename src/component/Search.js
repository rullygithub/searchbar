import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Search = ({onSearch}) => {

    const [searchText, setSearchText] = useState('')

    const handleSearch = () => {
        onSearch(searchText)
    }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search'
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />

      <Icon name="search" size={20} onPress={handleSearch}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#a1a1a1',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical:10,
        margin:10,
        marginBottom: 10,
      },
      input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        
      },
})