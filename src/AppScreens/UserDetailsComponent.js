import React, { useMemo } from 'react'
import { View, Image, Text } from 'react-native'
import Reactotron from 'reactotron-react-native';

import { styles } from '../AuthScreens/authstyles'

export default function UserDetailsComponent({ navigation, route }) {
    const updateUserDataObj = (route) => {
        const { userDetails } = route?.params
        return [{
            userId: userDetails.userId,
            title: userDetails.title,
            description: userDetails.body
        }]
    }
    const updatedDataObj = useMemo(() => updateUserDataObj(route), [navigation]);

    return (
        <View style={[styles.flex1, styles.flexColumnWithCenter, styles.m10, styles.p10]}>
            <Image
                style={styles.largeLogo}
                source={require('../images/user_icon.png')}
            />
            {updatedDataObj.map((item) => {
                return <View key={item.userId} style={[styles.p10, { flexDirection: 'column' }]}>
                    <Text style={[styles.p5,styles.medFontSize, {alignSelf:'center'}]}> {`USER ID : ${item.userId}`} </Text>
                    <Text style={[styles.p5,styles.medFontSize]}> {`TITLE : ${item.title}`} </Text>
                    <Text style={[styles.p5,styles.medFontSize]}> {`DESCRIPTION : ${item.description}`} </Text>

                </View>
            })}
        </View>
    )
}
