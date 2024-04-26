import { View, Text } from 'react-native';

import styles from './style';

 const Mensagem = ({nome = '', sobrenome = ''}) => (
    <View style={styles.viewMensage}>
        <Text style={styles.mensage}>{`Olá ${nome} ${sobrenome} `}</Text>
    </View>
);
 
export default Mensagem;