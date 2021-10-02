import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartScreen = ({ navigation, route }) => {
    const id = route.params.id;
    return (
        <View style={styles.container}>
            <Text>ID: {id}</Text>
            <Button
                title="Get New ID"
                onPress={() => navigation.setParams(
                    { id: Math.floor(Math.random() * 100) })}
            />
            <Text>Name: {route.params.name}</Text>
            <Text>(Screen 1)</Text>
            <Text>Welcome to My App</Text>
            <Button
                title="Go To Dashboard"
                onPress={() => navigation.navigate('LastScreen')}
            ></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default StartScreen;