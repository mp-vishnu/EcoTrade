import { StyleSheet } from "react-native";
import colors from '../../config/colors';
const styles = StyleSheet.create({
    btn: {
        height: 65,
        width: '80%',
        backgroundColor: colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:'5%',
       
    },
    btntxt: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default styles;