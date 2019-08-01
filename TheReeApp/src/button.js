import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert( 'You pressed the button')

  }

  render(){
    return (

        <View style={styles.container}>

          <View style={styles.buttonContainer}>

              <Button
                  onPress={this._onPressButton}
                  title="Press me"
                />

          </View>

        </View>

              );
          }
      }

      const styles= StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
        },
        buttonContainer: {
          margin: 20
        }


  });
