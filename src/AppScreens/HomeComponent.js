import React, { useEffect, useState, useContext } from 'react'
import { View, Text, FlatList, RefreshControl, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import Reactotron from 'reactotron-react-native'
import axios from 'axios'

import { styles } from '../AuthScreens/authstyles'
import colors from '../utils/colors'
import { strings } from '../utils/constatns'
import { UserContext } from '../context/context'

const requestApi = 'https://jsonplaceholder.typicode.com/posts'

export default function HomeComponent(props) {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const { updateLoginStatus } = useContext(UserContext)

    useEffect(() => {
        loadUserData()
    }, [])

    const loadUserData = () => {
        setLoading(true)

        axios.get(requestApi).then((response) => {
            setUserData(response.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }
    const onPressItem = (item) => {
        props.navigation.navigate('Details', { userDetails: item })
    }
    const onPressLogout = () => {
        updateLoginStatus(false)
    }
    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => onPressItem(item)} style={[styles.flex1, styles.flexColumn, styles.m10, styles.p10, styles.lightBorder]}>
            <View style={[styles.contentCenterWithRow, styles.flex1]}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../images/user_icon.png')}
                />
                <Text style={styles.p5}>{item.title}</Text>
            </View>
            <View style={[styles.flex1, styles.p10]}>
                <Text >{item.body}</Text>
            </View>
        </TouchableOpacity>
    }
    return (
        <View style={[styles.container, styles.p10, styles.m10]}>
            {
                loading ? <ActivityIndicator size='large' color="#00ff00" />
                    : <View style={[styles.p5]}>
                        <TouchableOpacity onPress={onPressLogout} style={[styles.p5, styles.m5, styles.bgRed, { alignSelf: 'flex-end' }]}>
                            <Text style={{ color: colors.white }}> {strings.LOG_OUT} </Text>
                        </TouchableOpacity>
                        <FlatList
                            data={userData}
                            keyExtractor={(item) => item.id}
                            refreshControl={<RefreshControl onRefresh={loadUserData} />}
                            renderItem={renderItem}
                        />
                    </View>
            }
        </View>
    )
}
