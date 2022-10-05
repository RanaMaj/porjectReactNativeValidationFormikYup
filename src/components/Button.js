import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttoncontainer} onPress={onPress} >
                <Text style={styles.LoginBtn}>Lgoin</Text>
            </TouchableOpacity >
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        PaddingHorizontal: 15,
    },
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 151,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#3C67AF',

    },
    LoginBtn: {
        color: 'white',
        fontSize: 24
    }

})