//  @flow

import React, {
  Component,
} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  ListView,
  Header,
} from 'react-native';
import { connect } from 'react-redux'

import LeggTilButton from './leggtilbutton';

import { LEGG_TIL_VARE, leggTilVare } from './actions/varer';

export const varer = (state = [], action) => {
  switch (action.type) {
    case LEGG_TIL_VARE:
      return [
        ...state,
        {
          tekst: action.payload
        }
      ];
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  return {
    varer: state.varer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tekstEndret: (tekst) => {
      dispatch(leggTilVare(tekst));
    }
  }
};

const LIGHT_BLUE = '#dff1f9';

class Handleliste extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(nextProps.varer) });
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <LeggTilButton />
        <ListView
          enableEmptySections
          style={{backgroundColor: LIGHT_BLUE}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.tekst}</Text>}/>
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
