import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LoginScreen = () => {
    // constants

    const handleLogin = () => {
        // implement login authentication logic
        // TODO: Start with a simple email and password set up
        // TODO: Then implement Google Login authentication

        // Make sure to clear input fields after submission
    };

    return (
        <View style={styles.container}>
            <Text style={styles.button}>
                Login
            </Text>
        </View>
    );
};

// Note: these styles are just for coding right now. Designs will change in
// the future.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 20,
      color: 'white'
    },
    button: {
        backgroundColor: 'blue', // color will change
        color: 'white', 
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10, 
        borderRadius: 5, // border radius will change
    },
  });

export default LoginScreen;