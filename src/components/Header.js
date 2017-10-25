import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  return <Text style={styles.containerStyles}>{props.headerText}</Text>
};
const styles = {
  containerStyles : {
    margin: 10,
    padding: 10,
    fontSize: 34,
    shadowColor: '#000',
    backgroundColor: '#ddd',
    opacity: 0.5,
    textAlign: 'center',
    borderColor: '#ddd',
    borderBottomWidth: 1,
  }
}
export default Header;