import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './components/exemplo_1';
import Atividade_1 from './components/atividade_1';
import Exemplo_2 from './components/exemplo_2';
import Atividade_2 from './components/atividade_2';
import Exemplo_3 from './components/exemplo_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
}); 