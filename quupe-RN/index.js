import { AppRegistry, YellowBox } from 'react-native';
import App from './js/App';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Class RCTCxxModule was not exported.'
]);

AppRegistry.registerComponent('quupe', () => App);
