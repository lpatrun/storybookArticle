import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, ColorValue } from 'react-native';

interface Props {
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  fill?: boolean;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function Button({ text, backgroundColor = 'black', textColor = 'white', fill = true, 
  borderColor = 'transparent', additionalStyle, onPress }: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      backgroundColor: fill ? backgroundColor : 'transparent',
      borderWidth: 1,
      borderColor: borderColor,
    };
  }, [backgroundColor, fill, borderColor]);

  return (
    <TouchableOpacity
      style={[styles.wrapper, additionalStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={{color: textColor, fontSize: 30}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
});

export default Button;
