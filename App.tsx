import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import DrawerNavigator from './src/stacks/MainDrawer'

export default function App() {
  return ( 
    <NavigationContainer>
      <DrawerNavigator/> 
    </NavigationContainer> 
  );
}

