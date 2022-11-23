import {Dimensions,StyleSheet} from 'react-native'

const {width, heigth} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    imgSize: {
        width: 400,
        heigth: 400,
    },
    horizontal:{
        flexDirection: 'row', 
        justifyContent : 'space-around',
        marginTop: 10 
    },
    textHorizontal: {
        flexDirection: 'row', 
        justifyContent : 'space-between', 
        marginTop: 10
    },
    tamanhoInput:{
        width : width / 2.3, 
        marginBottom: 10

    }
})

export default styles
export { width,heigth}