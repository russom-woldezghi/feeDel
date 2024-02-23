import React from 'react';
import Navigation from './src/navigation';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Item {
  id: string;
  title: string;
}

const DATA: Item[] = 
[
  { id: 'a0', title: 'ሀ' },
  { id: 'a1', title: 'ሁ' },
  { id: 'a2', title: 'ሂ' },
  { id: 'a3', title: 'ሃ' },
  { id: 'a4', title: 'ሄ' },
  { id: 'a5', title: 'ህ' },
  { id: 'a6', title: 'ሆ' },
];

interface Styles {
  flexOne: ViewStyle;
  item: ViewStyle;
  itemImage: ViewStyle;
  title: ViewStyle;
  imageScreenTwo: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  flexOne: { flex: 1 },
  item: {
    width: 90,
    height: 100,
    marginVertical: 5,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    maxHeight: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 55,
  },
  letter: {
    fontSize: 100,
    textAlign: 'center',
  },
  imageScreenTwo: {
    width: '100%',
    height: 200,
  },
});

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: 'red' }}>
      <Navigation DATA={DATA} styles={styles} />
    </SafeAreaProvider>
  );
}
