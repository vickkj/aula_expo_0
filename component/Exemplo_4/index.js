    import {View, Text, TextInput} from 'react-native';

    import styles from './styles';

    export default function Exemplo_4(){

        return(
            <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo 4</Text>

            <TextInput style={styles.input} placeholder='Digite seu nome:  '/>

            <Text style={styles.texto}>Nome digitado: </Text>

            </View>
        )
    }