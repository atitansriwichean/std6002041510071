//import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// write component
export default class Login extends React.Component{
    static navigationOptions = {
        
        title: "Login",
        headerStyle: {
            backgroundColor: "pink",
        },
        headerTintColor: "white",
    };
    
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        };
    }

    async componentDidMount() {
        try {
            if (await AsyncStorage.getItem("login_token") !== null) {
                this.props.navigation.navigate("Me");
            }
        } catch (error) {
            console.error(error);
        }
    }

    goLogin() {
        axios.post("http://128.199.240.120:9999/api/auth/login", {
            email: this.state.email,
            password: this.state.password
        }).then(async function (response) {
            // alert("Logined !");

            console.log(response.data.data.token);
            try {
                await AsyncStorage.setItem("login_token", response.data.data.token);
            } catch (error) {
                alert("Save token error !");

                return;
            }

            this.props.navigation.navigate("Me");
        }.bind(this))
        .catch(function (error) {
            alert("Login fail !");
            console.log(error);
        });
    }
    render(){
        return(
            <View style={{ padding: 20 }}>
                    <TextInput
                        style={{ fontSize: 20 }}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <TextInput
                        secureTextEntry
                        style={{ fontSize: 20 }}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <Button
                        onPress={this.goLogin.bind(this)}
                        title="Login"
                        color="black"
/>
                    
            </View>
        );
    }
}
