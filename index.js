/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './src/Main';
// import Router from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => Router);
