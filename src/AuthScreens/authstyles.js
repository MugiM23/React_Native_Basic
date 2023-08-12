import { StyleSheet } from "react-native"
import colors from '../utils/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 30
    },
    loginButton: {
        padding: 10,
        backgroundColor: colors.mediumSpringGreen,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        margin: 10
    },
    flexColumnWithCenter: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexColumn: {
        flexDirection: 'column',
    },
    contentCenterWithRow: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    flex1: {
        flex: 1
    },
    textInputStyle: {
        width: '100%',
        height: 50,
        margin: 5
    },
    p10: {
        padding: 10
    },
    p5: {
        padding: 5
    },
    m10: {
        margin: 10
    },
    m5: {
        margin: 5
    },
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 25,
        height: 25,
    },
    mediumLogo: {
        width: 30,
        height: 30,
    },
    largeLogo: {
        width: 50,
        height: 50,
    },
    lightBorder: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: colors.gray
    },
    medFontSize: {
        fontSize: 15
    },
    bgRed: {
        backgroundColor: colors.red, 
        borderRadius: 5
    }
})