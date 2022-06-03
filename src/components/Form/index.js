import React, {useState} from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import ResultImc from "./ResultImc/"
import styles from "./style"

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [massageImc, setMassageImc] = useState("PREENCHA O PESO E ALTURA")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("CALCULAR")

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validationImc() {
    if(weight != null && height != null) {
      setMassageImc("SEU IMC É IGUAL:")
      setHeight(null)
      setWeight(null)
      imcCalculator()
      setTextButton("CALCULAR NOVAMENTE")
      return
    }
    setImc(null)
    setTextButton("CALCULAR")
    setMassageImc("PREENCHA O PESO E ALTURA")

  }

  return (
    <View style={styles.formContext}>
        <View style={styles.formContent}>
            <Text  style={styles.textForm}>ALTURA</Text>
            <TextInput
              style={styles.inputForm}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex. 1.75"
              keyboardType="numeric"
            />

            <Text style={styles.textForm}>PESO</Text>
            <TextInput
              style={styles.inputForm}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex. 75.354"
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonForm}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc
          style={styles.marginTopText}
          messageResultImc={massageImc}
          resultImc={imc}
          />
    </View>
  );
}
