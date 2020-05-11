import React, { useEffect, useState } from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tdate } from '@shinbaek/tool-case';

const WINDOW_WIDTH = Dimensions.get('window').width;

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

  const onPressPreviousMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const onPressNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <ScrollView>
      <View style={styles.calendar_header}>
        <Button title="<" onPress={onPressPreviousMonth} />
        <Text>{`${year}.${month}`}</Text>
        <Button title=">" onPress={onPressNextMonth} />
      </View>
      <View>
        <View style={styles.calendar_wrapper}>
          {dates.map(week => {
            return week.map(date => {
              return (
                <View key={`${date.year}${date.month}${date.date}`} style={styles.date_card}>
                  <Text>{date.date}</Text>
                </View>
              );
            });
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendar_header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  calendar_wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    minWidth: WINDOW_WIDTH,
    maxWidth: WINDOW_WIDTH,
    width: WINDOW_WIDTH
  },
  date_card: {
    marginTop: 5,
    width: WINDOW_WIDTH * 0.13,
    height: WINDOW_WIDTH * 0.13,
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 5,
  }
});

export default Calendar;
