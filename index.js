/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UserRegistration from './components/UserRegistration';

AppRegistry.registerComponent(appName, () => UserRegistration);
