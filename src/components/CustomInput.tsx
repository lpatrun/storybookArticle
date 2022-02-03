import { TextInput, KeyboardTypeOptions, StyleSheet, ViewStyle, View } from 'react-native';
import React from 'react';

export type InputVersion = 'default' | 'inverted' | 'outline';

interface Props {
	keyboardType: KeyboardTypeOptions | undefined;
	version: InputVersion;
	defaultValue: string;
	placeholder: string;
	inputRef: React.MutableRefObject<string>;
}

export default function CustomInput({ keyboardType, version, defaultValue, placeholder, inputRef }: Props) {
	const textInputStyle = React.useMemo(() => getStyle(version), [version]);

	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, textInputStyle]}
				onChangeText={(text) => (inputRef.current = text)}
				defaultValue={defaultValue}
				placeholder={placeholder}
				keyboardType={keyboardType}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		height: 40,
		paddingHorizontal: 10,
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		borderRadius: 4,
	},
	default: {
		backgroundColor: '#000',
		color: '#fff',
	},
	inverted: {
		backgroundColor: '#fff',
		color: '#000',
	},
	outline: {
		borderWidth: 1,
		borderColor: '#000',
		color: '#000',
	},
});

function getStyle(version: InputVersion): ViewStyle {
	if (version === 'default') return styles.default;
	if (version === 'inverted') return styles.inverted;
	return styles.outline;
}
