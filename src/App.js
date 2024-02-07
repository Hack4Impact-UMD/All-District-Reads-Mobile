import './App.css';
import LoginScreen from './LoginScreen';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginScreen />
      </header>
    </div>
  );
}

export default App;
