import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import OnlineShoppingScreen from './components/OnlineShoppingScreen';
import AddToChartScreen from './components/AddToChartScreen';
import PaymentSuccess from './components/PaymentSuccess';

  class  App extends  Component {

    render(){
  return (
    <View style={styles.container}>
      
      
      <StatusBar style="auto" />
      {/*<OnlineShoppingScreen/>*/}
      {/*<AddToChartScreen/>*/}
      <PaymentSuccess/>
      
    </View>
  );
}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
