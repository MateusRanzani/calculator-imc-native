import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.marginTopText}>{props.messageResultImc}</Text>
      <Text style={styles.textImcResponse}>{props.resultImc}</Text>
      <View style={styles.boxShareButton}>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
