import {use, useState} from 'react';

import { View, Text, Pressable } from 'react-native';

import styles from './style';

function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        setNumero(numeoro + 1);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Pressable
                onPress={() => { }}
                style={({ pressed }) => pressed ? styles.botaoPress : styles.botao}
            >
                <Text style={styles.txtBotao}>Ex. botão</Text>

            </Pressable>

            <Pressable
                onPress={() => incremento()}
                style={({ pressed }) => pressed ? styles.botaoPress : styles.botao}
            >

                <Text style={styles.titulo}>Exemplo State</Text>

                <Text style={styles.txtNumero}>{numero}</Text>

                <Text style={styles.txtBotao}>+1</Text>

            </Pressable>
        </View>
    );
}
export default Exemplo_3;