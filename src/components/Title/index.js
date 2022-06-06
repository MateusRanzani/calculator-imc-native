import React from "react"
import {Text, View, Image} from 'react-native';
import styles from "./style"

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={
            require('../../../assets/pngwing.com.png')
          }
        />
      </View>
      <View style={styles.containerForTextTitle}>
        <Text style={styles.textTitle}>ONEBITHELT</Text>
        <Text style={styles.textSubtitle}>CALCULATOR IMC</Text>
      </View>
    </View>
  );
}
