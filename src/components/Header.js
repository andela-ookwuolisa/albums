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
    shadowColor: '#ddd',
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: '#fff',
    borderBottomWidth: 4,
  }
}
export default Header;