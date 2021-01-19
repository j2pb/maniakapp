/**
 * @format
 */
import('./ReactotronConfig');
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import axios from 'axios'
import config from './config'

axios.defaults.baseURL = config.baseURL;

AppRegistry.registerComponent(appName, () => App);
