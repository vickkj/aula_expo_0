import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d1c4e9',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        color:'#673ab7',
        fontSize:30,
        fontWeight:'bold',
        marginVertical: 20,
    },
    botao: {
        borderWidth: 3,
        padding: 10, 
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#673ab7',
    },
    txtBotao: {
        fontSize: 25,
        color: '#673ab7',
    },
    botaoPress: {
        borderWidth: 3,
        padding: 10, 
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#673ab7',
        backgroundColor: '#673ab7',
    },

     txtNumero:{
        fontSize: 30,
        color: '#673ab7',
        marginVertical:10,
    }
});

export default styles;