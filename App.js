import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import fire from './config/fire';
import ListComponent from './components/listComponent';
import DetailComponent from './components/detailComponent';

const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user})
      } else {
        this.setState({user: null})
      }
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Header
          centerComponent={{ icon: 'album', color: '#fff' }}
          rightComponent={{ icon: 'account-box', color: '#fff' }}
          containerStyle={{
              backgroundColor: 'red',
          }}
        />
        <Stack.Navigator 
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Liste des items" component={ListComponent}/>
          <Stack.Screen name="detail" component={DetailComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


