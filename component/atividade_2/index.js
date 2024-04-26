import { View, Text } from 'react-native';

import Mensagem from './mensagem';
import styles from './style';

function Atividade_2(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Olá senhores</Text>
            <Mensagem fruta = 'maça' nome = 'vinicius'/>
            <Mensagem fruta = 'carambolas' nome = 'jesus'/>
            <Mensagem fruta = 'uva' nome = 'vitor'/>
        </View>
    );
}
export default Atividade_2;
