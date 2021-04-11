import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList  } from 'react-native';

import HomeCategory from '../../components/ChannelCategory';


import styles from './styles'
import categories from '../../assets/data/categories';


//const firstCategory=categories.items[0]

const HomeScreen=()=> {
  return (
    <View style={styles.container}>
       {/* list of category */}
     {/* <HomeCategory category = {firstCategory}/> */}
     <FlatList 
     data={categories.items}
     renderItem={({item})=>
    <HomeCategory category={item}/>}
     />
    </View>
  );
}

export default HomeScreen
