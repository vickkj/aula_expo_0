import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './component/exemplo_1';
import Atividade_1 from './component/atividade_1/index2.js';
import Exemplo_2 from './component/Exemplo_2/index.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
