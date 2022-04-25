import React from 'react'
import { ScrollView } from 'react-native'
import FavoritesProducts from '../../components/FavoriteProducts'
import MainProducts from '../../components/MainProducts'

function index() {

        return(
        <ScrollView>
            <FavoritesProducts/>
            <MainProducts />
        </ScrollView>
    )
}

export default index