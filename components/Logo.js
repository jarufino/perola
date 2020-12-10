import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri:'https://uilogos.co/img/logomark/cod-lab.png' }} style={{height:50, width: 50}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
});
export default Logo;
