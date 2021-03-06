import React, {useEffect, useState} from 'react'
import{ ScrollView, Text, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import categoriesData from '../../../assets/categories'
import { Category } from '../../models'
import styles from './styles'

function index () {
    const navigation = useNavigation()
    const [categories, setCategories]=useState<Category[]>([])
    useEffect(()=>{
        setCategories(categoriesData)
        return() => {
            setCategories([])
        }
    })
    return (
        <ScrollView 
            bounces={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollStyle} 
        >
            {categories.map((item:Category) => {
                return(
                    <TouchableOpacity onPress={()=> navigation.navigate('CatecoryFiltring')} key={item.id} style={styles.center} >
                        <Image source={item.src} style={styles.image} />
                        <Text style={{fontSize: 16, color: '#757575'}} >{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}
export default index