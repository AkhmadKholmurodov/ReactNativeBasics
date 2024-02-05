import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}>
        <Text style={styles.text}>Akhmad Here</Text>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1:{
    flex: 1,
    backgroundColor: '#fff',
  },
  box2:{
    flex: 2,
    backgroundColor: '#333',
    flexGrow: 24,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    color:'#fff',
    margin: 'auto',
    position:'relative'
  },
  box3:{
    flex: 1,
    backgroundColor: '#fff'
  }

  
});
