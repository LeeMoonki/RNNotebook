import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tdate } from '@shinbaek/tool-case';

const shape = (dates: DateStructure[]): DateStructure[][] => {
  const ds = dates.slice();
  const result = [];

  for (let i = 0, r = 0; i < ds.length; i++) {
    if (i % 7 === 0) {
      result.push([ds[i]]);
      r = result.length - 1;
    } else {
      result[r].push(ds[i]);
    }
  }

  return result;
};

function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [dates, setDates] = useState(shape(tdate.getDatesOfMonth(year, month, false)));
  useEffect(() => {
    setDates(shape(tdate.getDatesOfMonth(year, month, false)));
  }, [month]);

  return (
    <View>
      <Text>Calendar</Text>
      <View>
        <View style={styles.calendar_wrapper}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar_wrapper: {
    
  }
});

export default Calendar;
