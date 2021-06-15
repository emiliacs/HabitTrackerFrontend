import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  
  const fetchRepositories = async () => {
    const response = await fetch('http://localhost:36656/weatherforecast');
    const json = await response.json();

    console.log(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', color:'red'}}>ProjectRed</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
