import React ,{useState, useEffect}from 'react';
import { StyleSheet, Image, Text, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles'


interface HomeCategoryProps {
  category:{
    id: string,
    title:string,
    movies:{
        id:string,
        poster:string
    }[]
  }
}

const HomeCategory = (props: HomeCategoryProps)=>{
   const {category } = props

   const navigation = useNavigation();

   const onMoviePress = (movie)=>{
     console.log(movie.id)
      navigation.navigate('ChannelDetailScreen' ,{id:movie.id})
   }
    return (
   <>
    <Text style={styles.title}>{category.title}</Text>
        <FlatList 
        data ={category.movies}
        renderItem ={({item})=>(
          <Pressable onPress={()=>onMoviePress(item)}>
          <Image style={styles.image} source={{uri:item.poster}}/>
          </Pressable>
      
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
    </>
    );
}

export default HomeCategory