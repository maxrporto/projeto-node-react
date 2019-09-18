import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './pages/Login';

export default function  App() {
  return (
      <Login/>
/*    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  */
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#7159c1', 
    justifyContent: 'center',
    alignItems: 'center'   
  },

  text:{ 
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  },
});