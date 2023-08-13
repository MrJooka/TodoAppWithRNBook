import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface Props {}

const AddToDo = ({}: Props) => {
  return (
    <View style={styles.block}>
      <TextInput placeholder="할 일을 입력해주세요." style={styles.input} />
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
