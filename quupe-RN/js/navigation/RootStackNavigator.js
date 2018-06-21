import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { MessagesModal } from './NavigationLayout';

export default createStackNavigator(
    {
        Layout: NavigationLayout,
        MessagesModal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
