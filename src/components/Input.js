import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const Input = ({ placeholder, value, onChangeText, error, secureTextEntry, onBlur, label }) => {
    return (
        <View style={styles.inputcontainer}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
            />
            <Text style={styles.error} >{error}</Text>
        </View >
    )
}

export default Input

const styles = StyleSheet.create({
    inputcontainer: {
        width: '90%',
        height: 70,
        paddingHorizontal: 22
    },
    input: {
        flex: 1,
        width: 339,
        height: 44,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderColor: 'grey',
        borderRadius: 12,
        paddingLeft: 10,
    },
    error: {
        color: 'red',
        fontSize: 15,
        marginTop: 3
    },
    label: {
        color: 'black'
    }
})