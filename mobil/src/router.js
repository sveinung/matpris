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
import Brukarsesjon from './components/brukarsesjon';

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
        />
        <Scene
          key="registrerBrukar"
          component={RegistrerBrukar}
          title="Register brukar"
        />
        <Scene key="innlogga">
          <Scene
            key="handleliste"
            initial={true}
            component={Handleliste}
            title="Legg til vare"
            onRight={() => Actions.brukarsesjon()}
            rightTitle={renderRightButton()}
          />
          <Scene
            key="brukarsesjon"
            component={Brukarsesjon}
            title="Brukar"
          />
        </Scene>
      </Scene>
    </Router>
  </View>
);

const renderRightButton = () =>
    <Icon name="gear" size={30} color={DODGER_BLUE} />;

export default RouterComponent;
