import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import Button from './Button';

interface Props {
  onSaveDate: (value: any) => void;
  onCancelDate: (value: any) => void;
}

export function CalendarPicker({onSaveDate, onCancelDate}: Props) {
  const [selectedDate, setSelectedDate] = React.useState<DateData | null>(null);

  const pickDocument = () => {
    return null;
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={setSelectedDate}
        onDayLongPress={setSelectedDate}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        renderArrow={direction => (
          <Text>{direction === 'left' ? '←' : '➝'}</Text>
        )}
      />
      <View style={styles.wrapper}>
        <Text>SELECTED DATE: {selectedDate?.dateString}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          text="SAVE DATE"
          textColor="black"
          borderColor="black"
          fill={false}
          onPress={() => {
            pickDocument();
            onSaveDate(selectedDate);
          }}
          additionalStyle={styles.marginRight}
        />
        <Button
          text="CANCEL"
          backgroundColor="transparent"
          textColor="black"
          onPress={() => onCancelDate(null)}
          additionalStyle={styles.marginLeft}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    marginBottom: 10,
    width: '100%',
    zIndex: 0,
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },
});

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'en';
