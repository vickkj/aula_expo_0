import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function Atividade_3() {


    const [numero, setNumero] = useState(0);

    function incremento ()
    {
        setNumero(numero + 1);
    }

    function decremento()
    {
        setNumero(numero - 1);
    }

    function zerar() {
        setNumero(numero - numero);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerNumeros}>
                <Pressable
                    onPress={() => incremento()}
                    style={({ pressed }) => pressed ?
                        [styles.botao, styles.botaoPress]
                        :
                        styles.botao}
                >
                    <Text style={styles.txtBotao}>+1</Text>
                </Pressable>

                <Text style={styles.txtNumero}>{numero}</Text>

                <Pressable
                    onPress={() => decremento()}
                    style={({ pressed }) => pressed ?
                        [styles.botao, styles.botaoPress]
                        :
                        styles.botao}
                >
                    <Text style={styles.txtBotao}>-1</Text>
                </Pressable>
            </View>

            <Pressable
                onPress={() => zerar()}
                style={({ pressed }) => pressed ?
                    [styles.botaoLimpa, styles.botaoPress]
                    :
                    styles.botaoLimpa}
            >
                <Text style={styles.txtBotao}>Limpar</Text>
            </Pressable>
        </View>
    );
}
export default Atividade_3;