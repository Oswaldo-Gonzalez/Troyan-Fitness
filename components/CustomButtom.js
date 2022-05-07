import React from "react";
import { Text, TouchableOpacity } from 'react-native';

export default function CustomButtom(props) {
    return (    
        <TouchableOpacity
            onPress={props.action} 
            style={{
                backgroundColor:props.color, 
                width:'90%', 
                height:55,
                borderRadius:100,
                alignItems: 'center',
                justifyContent: 'center',
          }}>
            <Text style={{fontSize:18, color:'white'}}>{props.text}</Text>
        </TouchableOpacity>
    );
}
