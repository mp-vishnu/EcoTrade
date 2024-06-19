import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem';
import Screen from '../Screen';
import ListItemSeparator from '../ListItemSeparator';
const message=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../../assets/mosh.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../../assets/mosh.jpg')
    }
]
function MessageScreen(props) {
    return (
        <Screen>
            <FlatList 
       data={message}
       keyExtractor={message=>message.id.toString()}
       renderItem={({item})=>
        <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={()=>console.log("MSG SELECTED",item)}
        /> 
    }
    ItemSeparatorComponent={ListItemSeparator}/>
        </Screen>
    );
}

export default MessageScreen;