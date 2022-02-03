import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {KeyboardTypeOptions, StyleSheet, View} from 'react-native';

import Wrapper from '../Wrapper';
import CustomInput, {InputVersion} from '../../../src/components/CustomInput';

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  version: InputVersion;
  defaultValue: string;
  placeholder: string;
}

function CustomInputStory({
  keyboardType,
  version,
  defaultValue,
  placeholder,
}: Props) {
  const inputRef = React.useRef('');

  return (
    <CustomInput
      keyboardType={keyboardType}
      version={version}
      defaultValue={defaultValue}
      placeholder={placeholder}
      inputRef={inputRef}
    />
  );
}

storiesOf('Custom Input', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('Default', () => (
    <CustomInputStory
      keyboardType="default"
      version="default"
      defaultValue=""
      placeholder=""
    />
  ))
  .add('Inverted', () => (
    <CustomInputStory
      keyboardType="default"
      version="inverted"
      defaultValue=""
      placeholder=""
    />
  ))
  .add('Outline', () => (
    <CustomInputStory
      keyboardType="default"
      version="outline"
      defaultValue=""
      placeholder=""
    />
  ))
  .add('All', () => (
    <View style={styles.container}>
      <CustomInputStory
        keyboardType="default"
        version="default"
        defaultValue="One"
        placeholder=""
      />
      <CustomInputStory
        keyboardType="default"
        version="inverted"
        defaultValue="Two"
        placeholder=""
      />
      <CustomInputStory
        keyboardType="default"
        version="outline"
        defaultValue="Three"
        placeholder=""
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1,
  },
});
