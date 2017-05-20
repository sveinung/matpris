//  @flow

import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

import { leggTilVare } from '../actions/varer';
import LeggTilButton from './leggtilbutton';

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
      <View style={styles.container}>
        {
          this.props.innlogga && <Text style={styles.brukarInfo}>{this.props.epost}</Text>
        }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 60,
  },
  brukarInfo: {
    padding: 10,
    marginTop: 60,
  },
});


const mapStateToProps = (state) => {
  const { epost, innlogga } = state.innlogging;

  return {
    varer: state.varer,
    epost,
    innlogga,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tekstEndret: (tekst) => {
      dispatch(leggTilVare(tekst));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
