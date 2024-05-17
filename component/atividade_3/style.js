import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'center',
        flex: 1,
        backgroundColor:'#d1c4e9',
        borderRadius: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    containerNumeros: {
        display: 'inline-block',
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
        width: '60px',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#673ab7',
        marginBottom: 15,
        display: 'inline-block',
        margin: 35
    },
    botaoLimpa: {
        borderWidth: 3,
        padding: 10, 
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#673ab7',
        marginBottom: 15
    },
    txtBotao: {
        fontSize: 25,
        color: '#673ab7',
    },
    botaoPress: {
        backgroundColor: '#fff',
    },
    txtNumero: {
        fontSize: 35,
        color: 'purple',
        marginVertical: 10,
    },
});

export default styles;