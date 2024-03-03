import React from 'react';
import Navigation from './src/navigation';
import { DATA } from './src/data/data';
import { styles } from './src/shared/styles'

export default function App() {
  return (
      <Navigation DATA={DATA} styles={styles} />
  );
}
