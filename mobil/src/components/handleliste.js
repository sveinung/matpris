//  @flow

import React, {
  Component,
} from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux'

import LeggTilButton from './leggtilbutton';
import HandlelisteItem from './handlelisteitem';
import type { Vare } from '../reducers/varer';
import { hentVarer } from '../actions/varer';

const LIGHT_BLUE = '#dff1f9';

type Props = {
  dataSource: Object,
  varer: Array<Vare>,
}

class Handleliste extends Component {
  state: {
    dataSource: Object,
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillMount() {
    this.props.hentVarer();
  }

  componentWillReceiveProps(nextProps: Props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(nextProps.varer) });
  }

  render() {
    return (
      <View style={styles.container}>
        <LeggTilButton />
        <ListView
          enableEmptySections
          style={{backgroundColor: LIGHT_BLUE}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <HandlelisteItem vare={rowData} />}/>
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
});

const mapStateToProps = (state) => {
  return {
    varer: state.varer.varer,
  }
};

const mapDispatchToProps = {
  hentVarer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
