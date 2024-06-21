import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade_3 from './component/atividade_3'; 
import Exemplo_4 from './component/Exemplo_4';

export default function App() {
  return (
    <View style={styles.container}>
     <Exemplo_4/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
