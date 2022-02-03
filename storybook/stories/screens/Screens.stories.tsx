import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import HomeScreen from '../../../src/screens/HomeScreen';

function HomeScreenStory() {
	const inputRef = React.useRef('');

	return (
		<HomeScreen
			inputRef={inputRef}
			onSaveDate={action('onSaveDate')}
			onCancelDate={action('onCancelDate')}
			onSavePress={action('onSavePress')}
		/>
	);
}

storiesOf('Screens', module).add('HomeScreen', () => <HomeScreenStory />);
