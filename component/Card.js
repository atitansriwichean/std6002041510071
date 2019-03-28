import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <View style={{flexDirection:'row', marginTop: 10, marginLeft: 10}}>
                    <Image 
                        style={{width: 100, height: 100 }}
                        source={{uri: 'https://pbs.twimg.com/profile_images/961593902175174656/AOfAhwcZ_400x400.jpg'}} 
                    />
                    <View style={{marginTop: 20, marginLeft: 40}}>
                        <Text style={{fontSize: 25}}>Baby Don't Stop</Text>
                        <Text style={{fontSize: 20}}>TaeTen</Text>
                    </View>
                </View>
                </CardSection>
                <CardSection>
                    <View style={{marginTop:10, marginLeft: 10}}>
                    <Image 
                        style={{width: 390, height: 280 }}
                        source={{uri: 'https://pbs.twimg.com/profile_images/961593902175174656/AOfAhwcZ_400x400.jpg'}} 
                    />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.button}>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
                        <Button
                            title="Buy"
                        />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 10,
    },
}

export default Card;
