import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Articles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>
                    Cadastrar
                </Text>
                <Text style={styles.content}>
                    Logar
                </Text>
                <TouchableOpacity style={{ padding:20 }}>
                    <Text style={{ color:'#1B9CFC' , top:-80, fontSize:30, right:10}}>
                    Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    articleContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:5
    },
    heading:{
        fontSize:30,
        top:-50,
        color:'red',
        padding:10,
        marginBottom:10
        
    },
    content:{
        fontSize:30,
        top:-70,
        left:10
    }
});

//make this component available to the app
export default Articles;
