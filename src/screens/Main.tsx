import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Calendar from '../components/Calendar';

function MainScreen() {
  return (
    <View style={style.container}>
      <Calendar />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MainScreen;
