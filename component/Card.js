import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Image 
                        style={{width: 100, height: 100 }}
                        source={{uri: 'https://pbs.twimg.com/profile_images/961593902175174656/AOfAhwcZ_400x400.jpg'}} 
                    />
                <Text>Baby Don't Stop</Text>
                <Text>TaeTen</Text>
                </CardSection>
                <CardSection>
                    <Image 
                        style={{width: 420, height: 300 }}
                        source={{uri: 'https://pbs.twimg.com/profile_images/961593902175174656/AOfAhwcZ_400x400.jpg'}} 
                    />
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
        marginTop: 10
    }
}

export default Card;
