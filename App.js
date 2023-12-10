import React, { useState } from 'react';
import { View, Button, ToastAndroid, StyleSheet,} from 'react-native';
import InputField from './InputField.js';
import SwitchField from './SwitchField.js';
import RadioButtonField from './RadioButtonField.js';

const App = () => {
  const [name, setName] = useState('');
  const [powerLevel, setPowerLevel] = useState('');
  const [interests, setInterests] = useState('');
  const [isSwitchOn, setSwitchOn] = useState(false);

  const Submit = () => {
    ToastAndroid.show(`Nazwa: ${name}\nPoziom magiczny: ${powerLevel}\nZainteresowanias: ${interests}\nCzy jest czarodziejem?: ${isSwitchOn}\nZapoznany z regulaminem?: ${radioValue}`, ToastAndroid.LONG);
  };

  return (
    <View style={styl.container}>
      <InputField label="Nazwa:" value={name} onChangeText={text => setName(text)} />
      <InputField label="Poziom magiczny:" value={powerLevel} onChangeText={text => setPowerLevel(text)} />
      <InputField label="Zainteresowania:" value={interests} onChangeText={text => setInterests(text)} />
      <SwitchField label="Czy jestes czarodziejem:" value={isSwitchOn} onValueChange={() => setSwitchOn(!isSwitchOn)} />
      <Button title="Wyslij" onPress={Submit} />
    </View>
  );
};

const styl = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;