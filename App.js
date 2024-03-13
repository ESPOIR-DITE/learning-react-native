import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My new React App</Text>
      <Button style={styles.button1} title="Press Me" ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red'
  },
  button1: {
    fontSize: 20,
    color: 'red',
    backgroundColor: 'blue',
    margin: 10,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1
  }
});
