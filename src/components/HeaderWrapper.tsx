import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import CMlogo from '../../assets/CMlogo';

interface Props {
  children?: JSX.Element;
}

export default function HeaderWrapper({children}: Props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CMlogo />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    overflow: 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});
