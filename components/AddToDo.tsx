import {StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {}

const AddToDo = ({}: Props) => {
  return <View style={styles.block} />;
};

export default AddToDo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
