import React from 'react';
import { View, Text, RadioButton } from 'react-native';

const RadioButtonField = ({ label, value, onValueChange }) => {
  return (
    <View>
      <Text>{label}</Text><RadioButton value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default RadioButtonField;