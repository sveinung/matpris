//  @flow

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class HandlelisteItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <View>
        <Text>{this.props.vare.varenamn}</Text>
      </View>
    );
  }
}

export default HandlelisteItem;
