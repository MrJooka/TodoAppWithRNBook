import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

interface Props {}

const AddToDo = ({}: Props) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력해주세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
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
