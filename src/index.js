import Expo from 'expo';
import { KeepAwake } from 'expo';
import App from '../App';

if (__DEV__) {
  KeepAwake.activate();
}

export default Expo.registerRootComponent(App);