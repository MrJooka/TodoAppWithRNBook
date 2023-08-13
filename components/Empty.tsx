import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {}

const Empty = ({}: Props) => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.description}>할 일이 없습니다.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 24,
    color: '#616161',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});
