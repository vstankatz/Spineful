import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import StretchStack from './stretchStack';
import HomeStack from "./homeStack";
import SourceStack from './sourceStack';
import DataStack from './dataStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Stretches: {
        screen: StretchStack,
    },
    Sources: {
        screen: SourceStack,
    },
    Data: {
        screen: DataStack,
    },
})


export default createAppContainer(RootDrawerNavigator)