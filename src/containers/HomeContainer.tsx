import React from 'react';
import { DateData } from 'react-native-calendars/src/types';

import HomeScreen from '../screens/HomeScreen';

export default function HomeContainer() {
	const inputRef = React.useRef('');
	const dateRef = React.useRef<DateData | null>();

	const onSaveDate = (date: DateData | null) => {
		dateRef.current = date;
	};

	const onCancelDate = () => {
		dateRef.current = null;
	};

	const onSavePress = () => {
		console.log('Your data: ', dateRef.current, inputRef.current);
	};

	return (
		<HomeScreen inputRef={inputRef} onSaveDate={onSaveDate} onCancelDate={onCancelDate} onSavePress={onSavePress} />
	);
}
