import {View, Text} from 'react-native';
import styles from './styles';

export default function app (){
return(
    <View style={styles.container}> 
    <Text style={styles.titulo}>
        <Atividade/> 
    </Text>
    <Text style={styles.mensagem} > "James da sdalada de frutas"</Text>
    <Text style={styles.mensagem} >"Quem você pensa que é? Chris Bumstead o Cbum?" </Text>
    <Text style={styles.mensagem} >"E diggo mais!" </Text>
    </View>
);
}