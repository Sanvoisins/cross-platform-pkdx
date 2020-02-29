import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import * as firebase from 'firebase'
import DetailComponent from './components/detailComponent'
import ListeComponent from './components/listComponent'
import LoadingScreen from './components/auth/LoadingScreen'
import LoginScreen from './components/auth/LoginScreen.js'
import RegisterScreen from './components/auth/RegisterScreen'
var firebaseConfig = {
  apiKey: "AIzaSyCPBeLY5TJemM4yh-OfCL-evPjsnZbFgYo",
  authDomain: "cross-platform-pkdx-f683c.firebaseapp.com",
  databaseURL: "https://cross-platform-pkdx-f683c.firebaseio.com",
  projectId: "cross-platform-pkdx-f683c",
  storageBucket: "cross-platform-pkdx-f683c.appspot.com",
  messagingSenderId: "727130189539",
  appId: "1:727130189539:web:69a86d56e26fc35de45fd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
  POKEDEX : ListeComponent,
  Detail : DetailComponent,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
);