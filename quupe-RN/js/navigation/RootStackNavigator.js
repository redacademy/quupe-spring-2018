import { createStackNavigator } from 'react-navigation';
import NavigationLayout from './NavigationLayout';

export default createStackNavigator(
  {
    Layout: NavigationLayout
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
