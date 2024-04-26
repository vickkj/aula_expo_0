import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'grey',
        height: '100%',
        width:'100%',
        padding: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    titulo: {
        color:'black',
        backgroundColor:'#069',
        fontSize:30,
        fontWeight:'bold',
        padding:'10px',
        border:'2px solid black',
        borderRadius:'20px',   
    },
    viewMensage: {
        backgroundColor:'lightgrey',
        border:'1px solid black',
        borderRadius:20,
        borderColor: 'orange',
        borderWidth: 2,
    },
    mensage: {
        fontSize: 25,
        margin: 10,
        color: 'black'
    },
});

export default styles;