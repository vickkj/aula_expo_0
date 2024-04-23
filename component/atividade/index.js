import {View, Text} from 'react-native';

import styles from './styles';
import Mensagem from './mensagem'

function Mensagem(nome,sobrenome) {
return(
    <View style={styles.viewmensagem}>
        <Text style={styles.mensagem}>{`Olá ${nome} ${sobrenome}`}</Text>

       
    </View>
)
};
