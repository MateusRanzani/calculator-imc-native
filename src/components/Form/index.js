import React, { useState } from "react";
import {
  Vibration,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [massageImc, setMassageImc] = useState("PREENCHA O PESO E ALTURA");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("CALCULAR");
  const [errorMessage, setErrorMessage] = useState(null);

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("CAMPO OBRIGATÓRIO *");
    }
  }

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      setMassageImc("SEU IMC É IGUAL:");
      setHeight(null);
      setWeight(null);
      imcCalculator();
      setTextButton("CALCULAR NOVAMENTE");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("CALCULAR");
      setMassageImc("PREENCHA O PESO E ALTURA");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContent}>
            <Text style={styles.textForm}>ALTURA</Text>
            <TextInput
              style={styles.inputForm}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex. 1.75"
              keyboardType="numeric"
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Text style={styles.textForm}>PESO</Text>
            <TextInput
              style={styles.inputForm}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex. 75.354"
              keyboardType="numeric"
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonForm}>{textButton}</Text>
            </TouchableOpacity>
        </Pressable>
      ) : (
        <View styles={styles.exhibitionResultImc}>
          <ResultImc
            style={styles.marginTopText}
            messageResultImc={massageImc}
            resultImc={imc}
          />
          <TouchableOpacity
            style={styles.buttonForm}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonForm}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
