import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productsContainer: {
        width: '92%', 
        marginHorizontal: '4%',
    },
    titleProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#F24E61',
    }
})

export default styles