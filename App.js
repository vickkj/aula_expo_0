import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './component/exemplo_1';
import Exemplo_2 from './component/Exemplo_2/index.js';
import atividade_2 from  './component/atividade_2/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <atividade_2 />
      <StatusBar style="auto" />
    </View>
  );
}


