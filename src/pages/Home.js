import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Search from '../component/Search'
import axios from 'axios'

const data = [
  {key:1, name: 'Barang Pertama', price: '12.000'},
  {key:2, name: 'Barang Kedua', price: '13.000'},
  {key:3, name: 'Barang Ketiga', price: '14.000'},
  {key:4, name: 'Barang Keempat', price: '15.000'},
  {key:5, name: 'Barang Kelima', price: '16.000'},
]
const Home = () => {

  const [searchResult, setSearchResult] = useState('');
  let searchTimeout;

  const handleSearch = (query) => {
    // clearTimeout(searchTimeout);
    // searchTimeout = setTimeout(() => {

      axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => {
        setSearchResult(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      // const results = data.filter(item => item.name.includes(query));
      // setSearchResult(results)
    // }, 300)
  }

  return (
    <View>
      <Search onSearch={handleSearch}/>

      {searchResult.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  )
}

export default Home