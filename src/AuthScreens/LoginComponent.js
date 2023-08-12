import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';

import { styles } from './authstyles';
import { strings, credentials, errorMessages } from '../utils/constatns';
import colors from '../utils/colors';
import { UserContext } from '../context/context';

export default function LoginComponent(props) {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const { updateLoginStatus } = useContext(UserContext)

    const onPressLogin = () => {
        if (userName !== credentials.LOGIN_ID) {
            showAlertMessage(errorMessages.INVALID_USER_NAME)
        } else if (passWord !== credentials.LOGIN_PASSWORD) {
            showAlertMessage(errorMessages.INVALID_PASSWORD)
        } else {
            updateLoginStatus(true);
        }
    }

    const showAlertMessage = (message) => {
        Alert.alert('Oops!!', message, [
            {
                text: strings.CLOSE,
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);
    }

    return (
        <View style={styles.container}>
            <Text> {strings.KINDLY_LOGIN} </Text>
            <View style={styles.flexColumnWithCenter}>
                <TextInput
                    mode='outlined'
                    label={strings.USER_NAME}
                    value={userName}
                    onChangeText={setUserName}
                    style={styles.textInputStyle}
                />
                <TextInput
                    mode='outlined'
                    label={strings.PASS_WORD}
                    value={passWord}
                    onChangeText={setPassWord}
                    style={styles.textInputStyle}
                />

            </View>
            <TouchableOpacity style={[styles.loginButton, styles.centerAlign, { backgroundColor: (userName && passWord) ? colors.mediumSpringGreen : colors.mediumAquamarine }]}
                onPress={onPressLogin}
                disabled={!(userName && passWord)}
            >
                <Text style={{ color: colors.white, fontSize: 18 }}> {strings.LOGIN} </Text>
            </TouchableOpacity>
        </View>
    )
}

