import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    favorite: {
        width:width*0.29
    },
    favoriteView: {
        width:width*0.27,
        height:width*0.27,
    },
    favoriteImage: {
        width:width*0.27,
        height:width*0.27,
        borderRadius: 8,
    },
    labelFav: {
        transform: [{rotate:'45deg'}],
        position: 'absolute',
        right: -30,
        top: 6,
        backgroundColor: '#fff',
        paddingHorizontal:30,
        paddingVertical: 4
    },
})

export default styles