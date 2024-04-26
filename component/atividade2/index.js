import { View, Text } from 'react-native';

import styles from './styles'; 


export default function Atividade_2() {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}> Exemplo 2</Text>
            <Mensagem nome='Victor' />
            <Mensagem nome='Vector' />
            <Mensagem nome='Vyctor' />
        </View>

    );
};
