// import library
import React from 'react';
import { View } from 'react-native';
import Header from './Header'
import Login from './Login'
import Me from './Me'
import {createStackNavigator, createAppContainer} from 'react-navigation';

// write component
/*
class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Login" />
                <Login />
            </View>
        );  
    }
}

//export
export default App;
*/
const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Me: Me
    }, {
        // initialRouteName: "Login"
        initialRouteName: "Me"
    }
);

export default createAppContainer(AppNavigator);
