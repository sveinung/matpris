// @flow
/* eslint react-native/no-inline-styles: 0 */
import React from 'react';
import {
  View,
} from 'react-native';
import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Handleliste from './components/handleliste';
import Logginn from './components/logginn';
import RegistrerBrukar from './components/registrerBrukar';

const DODGER_BLUE = '#1e90ff';

const RouterComponent = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene
        key="root"
      >
        <Scene
          key="logginn"
          component={Logginn}
          title="Logg inn"
          initial={true}
          onRight={() => {}}
          renderRightButton={renderRightButton}
        />
        <Scene
          key="handleliste"
          component={Handleliste}
          title="Legg til vare"
          onRight={() => {}}
          renderRightButton={renderRightButton}
        />
        <Scene
          key="registrerBrukar"
          component={RegistrerBrukar}
          title="Register brukar"
          onRight={() => {}}
          renderRightButton={renderRightButton}
        />
      </Scene>
    </Router>
  </View>
);

const renderRightButton = () => <Icon name="gear" size={30} color={DODGER_BLUE} />;

export default RouterComponent;
