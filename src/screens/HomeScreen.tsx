import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DateData } from 'react-native-calendars/src/types';
import Button from '../components/Button';
import { CalendarPicker } from '../components/CalendarPicker';
import CustomInput from '../components/CustomInput';
import HeaderWrapper from '../components/HeaderWrapper';

interface Props {
	inputRef: React.MutableRefObject<string>;
	onSaveDate: (date: DateData | null) => void;
	onCancelDate: () => void;
	onSavePress: () => void;
}

export default function CMScreen({ inputRef, onSaveDate, onCancelDate, onSavePress }: Props) {
	return (
		<HeaderWrapper>
			<>
				<View style={styles.wrapper}>
					<Text style={styles.wrapper}>Your name:</Text>
					<CustomInput
						defaultValue=""
						keyboardType="default"
						version="outline"
						placeholder="Your name my friend"
						inputRef={inputRef}
					/>
				</View>
				<View style={styles.wrapper}>
					<CalendarPicker onSaveDate={onSaveDate} onCancelDate={onCancelDate} />
				</View>
				<View style={styles.wrapper}>
					<Button onPress={onSavePress} text="SAVE" textColor="white" />
				</View>
			</>
		</HeaderWrapper>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 10,
	},
});
