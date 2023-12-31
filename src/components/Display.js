import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Display = props => {
  return (
    <View style={style.display}>
      <Text style={style.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};

export default Display;

const style = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});
