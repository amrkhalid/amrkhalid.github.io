import * as React from 'react';
import { render } from 'react-dom';
import { View, Text, Button, StyleSheet } from 'react-native';


class LastScreen extends React.Component{
render(){
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
            <Text>(Screen 2)</Text>
            {/* 
            <Text>Dashbaord</Text>
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            ></Button>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.popToTop()}
            ></Button> */}
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
    }
});

export default LastScreen;