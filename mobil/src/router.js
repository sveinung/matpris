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

import Handleliste from './handleliste';
import Logginn from './components/logginn';
import RegistrerBrukar from './components/registrer-brukar';

const RouterComponent = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene
        key="root"
        hideNavBar
      >
        <Scene
          key="logginn"
          component={Logginn}
          title="Logg inn"
          initial={true}
        />
        <Scene
          key="handleliste"
          component={Handleliste}
          title="Register"
        />
        <Scene
          key="registrerBrukar"
          component={RegistrerBrukar}
          title="Register brukar"
        />
      </Scene>
    </Router>
  </View>
);

export default RouterComponent;
