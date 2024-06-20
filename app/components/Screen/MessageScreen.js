import React,{ useState }  from 'react';
import { FlatList,View } from 'react-native';
import ListItem from '../ListItem';
import Screen from '../Screen';
import ListItemSeparator from '../ListItemSeparator';
import ListItemDeleteAction from '../ListItemDeleteAction';
const initialMessages=[
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
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = (message) => {
        // Delete the initialMessages from messages
        setMessages(messages.filter((m) => m.id !== message.id));
      };
    return (
        <Screen>
            <FlatList 
       data={messages}
       keyExtractor={(message) => message.id.toString()}
       renderItem={({item})=>
        <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={()=>console.log("MSG SELECTED",item)}
        renderRightActions={()=>
            <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
        /> 
    }
    ItemSeparatorComponent={ListItemSeparator}/>
        </Screen>
    );
}

export default MessageScreen;