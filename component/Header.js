
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text style={style.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const style = {
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'pink'
        
    },
    text: {
        fontSize: 30,
        color:'white',
        fontWeight: 'bold'
    }
}

export default Header;
