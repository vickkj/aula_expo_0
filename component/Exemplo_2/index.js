import { View, Text } from 'react-native';

import styles from './style';

const Mensagem = ({ nome = '', sobrenome = '' }) => (


    <View style={styles.container}>
        
        <Text style={styles.titulo}>Exemplo 3</Text>
        <Pressable 
        onPress={() => alert('Oi')} style={styles.botao}
        >
             <Text style={styles.txtBotao}>Ex. botão</Text>
        </Pressable>
    </View>
);

export default Mensagem;