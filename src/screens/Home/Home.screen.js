import React, { useCallback, useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from "axios";


const Home = ({ navigation }) => {
  const [images, setImages] = useState(null)

  let clientId = 'kwC-QxBa_pLvx4UhCWW5cmbCBTBja68zs5l1dZhk6x8'
  useEffect(() => {
    fetchResults()
  }, []);
   const fetchResults = () => {
    const url = `https://api.unsplash.com/search?page=1&query="mountains"
    }&client_id=${clientId}`;
    try {
      axios.get(url).then((response) =>{
        setImages(response)
      });
    } catch (error) {
    }
  };
  console.log("_______", images)




  return (
    <>
      <SafeAreaView style={styles.SafeAreaView1} >

        {/* {images.map((item)=>{
          return(<Image source={item}/>)
        })} */}
      </SafeAreaView>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Home
