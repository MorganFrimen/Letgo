import React from 'react'
import { ScrollView } from 'react-native'
import FavoritesProducts from '../../components/FavoriteProducts'
import MainProducts from '../../components/MainProducts'
import CategoryFilter from '../../components/CategoryFiltr'

function index() {

        return(
        <ScrollView>
            <CategoryFilter/>
            <FavoritesProducts/>
            <MainProducts />
        </ScrollView>
    )
}

export default index