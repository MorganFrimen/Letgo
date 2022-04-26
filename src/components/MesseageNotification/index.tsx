import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 
import styles from './style';

function index() {
  return (
    <View style={styles.headerMesseages} >
        <View style={styles.iconMessages} >
            <MaterialCommunityIcons name="message-processing" size={24} color="#757575" />
            <Text style={styles.textMesseage} >Оповещение в чате</Text>
        </View>
        <View>
            <AntDesign name="right" size={24} color="#9999" />
        </View>
    </View>
  )
}

export default index
