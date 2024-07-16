import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

export default function App(){
  return (
  <View style={styles.container}>
      <StatusBar style="auto"/>
    <Text>Tenemos aqui la app</Text>
    </View>
    );
};


const  styles = StyleSheet.create ({
  container:{
    flex:1,
    BackgroundColor:'#f81',
    alignItems:'center',
    justifyContent:'center',
  },
});
