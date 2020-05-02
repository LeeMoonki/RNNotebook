import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tdate } from '@shinbaek/tool-case';

export default function Calendar() {
  console.log('isDate : ', tdate.isDate(new Date()));
  console.log('getDatesOfMonth : ', tdate.getDatesOfMonth(2020, 5, false));

  return (
    <View>
      <Text>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
