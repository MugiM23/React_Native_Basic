/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import App from './App';
import { name as appName } from './app.json';
import { UserProvider } from './src/context/context';



export default function Main() {
  return (
    <PaperProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
