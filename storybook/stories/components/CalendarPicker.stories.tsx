import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Wrapper from '../Wrapper';
import {CalendarPicker} from '../../../src/components/CalendarPicker';

storiesOf('Calendar Picker', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('Default', () => (
    <CalendarPicker
      onSaveDate={action('onSaveDate')}
      onCancelDate={action('onCancelDate')}
    />
  ));
