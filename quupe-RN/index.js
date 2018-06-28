import { AppRegistry, YellowBox } from 'react-native';
import App from './js/App';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Class RCTCxxModule was not exported.',
    'Possible Unhandled Promise Rejection',
    'Deprecation warning: value provided is not in a recognized RFC2822 or ISO format.',
    'Warning: Encountered two children with the same key'
]);

AppRegistry.registerComponent('quupe', () => App);
