import React from 'react';
import { View, Text, Switch } from 'react-native';

const SwitchField = ({ label, value, onValueChange }) => {
  return (
    <View>
      <Text>{label}</Text><Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default SwitchField;