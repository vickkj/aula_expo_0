import { View,Text} from 'react-native';

import styles from './style';

function Exemplo_2 () {
    return (
    <View style={styles.container}>
        <Text style={styles.titulo}> Exemplo 2</Text>
        <Text style={styles.mensagem}>Olá Victor</Text>
        <Text style={styles.mensagem}>Cavalo ao quadrado</Text>

        <View style={styles.viewmensagem}>
        <Text style={styles.mensagem}> não</Text>
    </View>
    </View>
    
    )
}
export default Exemplo_2;