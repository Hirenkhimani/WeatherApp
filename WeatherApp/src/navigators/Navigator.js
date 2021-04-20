import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { Fonts } from '../common/Fonts';

import Home from '../screens/Home';
import forcastCity from '../screens/forcastCity';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Header = (title, navigation, left) => ({
  title: title,
  headerLeft: () =>
    left ? (
      <Icon name="arrow-left" type="font-awesome-5" color="#fff" size={20} onPress={() => navigation.goBack()} />
    ) : null,
  headerStyle: {
    backgroundColor: '#00804A',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 22,
    fontFamily: Fonts.RobotoBold,
    textAlign: 'center',
  },
});

const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={(props) =>
          Header('WheatherApp', props.navigation, false)
        }
      />
      <Stack.Screen
        name="forcastCity"
        component={forcastCity}
        options={(props) =>
          Header('WheatherApp', props.navigation, true)
        }
      />
    </Stack.Navigator>
  );
}


export default function Navigator() {
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}