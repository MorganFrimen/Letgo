import React from 'react'
import { View,Text, Image,TouchableOpacity } from 'react-native'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 

type productProps = {
    product: Product
}
type AntDesign = {
  AntDesign: string
}

function index({product}:productProps){
    return(
      <TouchableOpacity style={styles.favorite}>
          <View style={styles.favoriteView}>
              <Image 
                source={{uri:product.image}}
                resizeMode="stretch"
                style={styles.favoriteImage}
              />
              <TouchableOpacity> 
                <AntDesign style={{position:"absolute", left:4, bottom: 5 }} name="heart" size={26} color="red" />
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    )
}

export default index