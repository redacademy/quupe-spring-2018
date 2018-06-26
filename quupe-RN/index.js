import { AppRegistry, YellowBox } from 'react-native';
import App from './js/App';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Class RCTCxxModule was not exported.',
    'Possible Unhandled Promise Rejection'
]);

AppRegistry.registerComponent('quupe', () => App);
