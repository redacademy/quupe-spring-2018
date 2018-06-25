import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { MessagesModal } from './NavigationLayout';

export default createStackNavigator(
    {
        Layout: NavigationLayout,
        Messages: MessagesModal
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);
