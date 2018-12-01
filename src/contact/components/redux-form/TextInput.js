import React, { Component } from 'react';
import { View, Text, TextInput as Input, StyleSheet } from 'react-native';

export default class TextInput extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{padding: 10}}>
        <Input
          style={{height: 40}}
          placeholder={this.props.placeholder}
          onChangeText={this.props.input.onChange}
          value={this.props.input.value}
        />
      </View>
    )
  }
}