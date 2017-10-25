import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

class AlbumList extends Component {
  componentWillMount(){
    console.log('component will mount');
  }
  render() {
    return (
      <View><Text>The list </Text></View>
    );
  }
}
export default AlbumList;