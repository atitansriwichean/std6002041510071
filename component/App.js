// import library
import React from 'react';
import { View } from 'react-native';
import Header from './Header'
import Card from './Card'

// write component
class App extends React.Component {
    render() {
        return (
            <View>
                <Header title="Albums" />
                <Card />
            </View>
        );  
    }
}

//export
export default App;
