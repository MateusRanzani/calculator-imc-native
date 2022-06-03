import React from "react"
import { View, Text, Image} from 'react-native';
import styles from "./style"

export default function ResultImc(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.marginTopText}>{props.messageResultImc}</Text>
      <Text style={styles.textImcResponse}>{props.resultImc}</Text>
    </View>
  );
}


