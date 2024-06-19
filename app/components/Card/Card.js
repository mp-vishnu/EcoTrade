import React from 'react'
import { View,Text, Image,} from 'react-native';
import styles from './styles';
function Card({ title, subTitle, image }) {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    );
  }

 export default Card;