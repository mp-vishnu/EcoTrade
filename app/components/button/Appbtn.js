import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../config/colors';
function Appbtn({title,onPress,color}) {
    return (
        <View style={styles.btn}>
            <TouchableOpacity style={[{backgroundColor:colors[color],borderRadius:50}]} onPress={onPress}>
              
               <Text style={styles.btntxt}>{title}</Text>
              
            </TouchableOpacity>
            </View>
    );
}

export default Appbtn;
