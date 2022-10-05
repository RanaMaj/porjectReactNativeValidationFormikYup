import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

const onPress = () => {
    console.log('on Press');
}

const LogoButton = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.ImageLogo} source={require('../../assets/images/logoImage.png')}></Image>
            </View>
            <View style={styles.ButtonSection}>
                <Pressable style={styles.btnActive}><Text style={styles.textActive} onPress={onPress}>Patient</Text></Pressable>
                <Pressable style={styles.btnPriymer}><Text style={styles.textPriymer} onPress={onPress}>Doctor</Text></Pressable>
            </View>
        </ScrollView>
    )
}

export default LogoButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 38,
    },
    ImageLogo: {
        width: 100,
        height: 66
    },
    ButtonSection: {
        flexDirection: 'row',
        marginTop: 64,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnActive: {
        width: 151,
        height: 44,
        backgroundColor: '#3C67AF',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textActive: {
        color: '#fff',
        fontSize: 18,
    },
    btnPriymer: {
        width: 151,
        height: 44,
        backgroundColor: '#99999915',
        borderColor: '#3D67AE15',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10
    },
    textPriymer: {
        color: '#3D67AE',
        fontSize: 18,
    },
})