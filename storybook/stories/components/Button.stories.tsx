import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color, boolean} from '@storybook/addon-knobs';

import Button from '../../../src/components/Button';
import Wrapper from '../Wrapper';
import {StyleSheet, View} from 'react-native';

storiesOf('Button', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('Default', () => (
    <Button
      text="Default"
      textColor="white"
      onPress={action('Default button')}
    />
  ))
  .add('Inverted', () => (
    <Button
      text="Inverted"
      backgroundColor="white"
      textColor="black"
      onPress={action('Inverted button')}
    />
  ))
  .add('Outline', () => (
    <Button
      text="Outline"
      textColor="black"
      borderColor="black"
      fill={false}
      onPress={action('Outline button')}
    />
  ))
  .add('All', () => (
    <View style={styles.container}>
      <Button
        text="Default"
        textColor="white"
        onPress={action('Default button')}
      />
      <Button
        text="Inverted"
        backgroundColor="white"
        textColor="black"
        onPress={action('Inverted button')}
      />
      <Button
        text="Outline"
        textColor="black"
        borderColor="black"
        fill={false}
        onPress={action('Outline button')}
      />
    </View>
  ))
  .add('with Knob', () => (
    <Button
      text={text('Label:', 'Knob button')}
      backgroundColor={color('Background color:', 'black')}
      borderColor={color('Border color:', 'transparent')}
      fill={boolean('Fill:', true)}
      textColor={color('Text color:', 'white')}
      onPress={action('Black button')}
    />
  ));

const styles = StyleSheet.create({
  container: {justifyContent: 'space-around', flex: 1},
});
