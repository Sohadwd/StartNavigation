/** @format */

import {AppRegistry} from 'react-native';
import App, {registerScreens} from './App';
import {name as appName} from './app.json';

/**
 * remove yellow warnings
 * @type {boolean}
 */
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
