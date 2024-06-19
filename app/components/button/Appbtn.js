import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../config/colors';
function Appbtn({title,onPress,color}) {
    return (
            <TouchableOpacity style={[styles.btn,{backgroundColor:colors[color]}]} onPress={onPress}>
                <Text style={styles.btntxt}>{title}</Text>
            </TouchableOpacity>
    );
}

export default Appbtn;
