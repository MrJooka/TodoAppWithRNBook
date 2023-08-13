import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  date: Date;
};

const DateHead = ({date}: Props) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{`${year}년 ${month}월 ${day}일`}</Text>
    </View>
  );
};

export default DateHead;

const styles = StyleSheet.create({
  block: {padding: 16, backgroundColor: '#26a69a'},
  dateText: {fontSize: 24, color: '#fff'},
});
