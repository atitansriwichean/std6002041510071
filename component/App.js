// import library
import React from 'react';
import { View } from 'react-native';
import Header from './Header'
import Login from './Login'

// write component
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
