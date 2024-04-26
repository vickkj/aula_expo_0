import { View, Text } from 'react-native';

import styles from './style';

 const Mensagem = ({fruta = '', nome = ''}) => (
    <View style={styles.viewMensage}>
        <Text style={styles.mensage}>{`Você come ${fruta} ${nome}?`}</Text>
    </View>
);
 
export default Mensagem;