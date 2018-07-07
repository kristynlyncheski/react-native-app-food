import React from 'react';
import { TouchableOpacity } from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.containerStyle}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    elevation: 1,
  }
};

export default Card;
