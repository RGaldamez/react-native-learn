import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ExerciseComponent from './src/screens/ExcerciseComponent';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import ColorManagerScreen from './src/screens/ColorManagerScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    Exercise: ExerciseComponent,
    List: ListScreen,
    Image: ImageScreen,
    CounterScreen: CounterScreen,
    Colors: ColorsScreen,
    ColorManager: ColorManagerScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
