import React from "react"
import { StyleSheet, View} from 'react-native';
import Title from './src/components/Title/index';
import Form from './src/components/Form/index';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:80,
  },
});


