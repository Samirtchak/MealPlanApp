import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";

function CategoryGridTitle(props) {

    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>

            <View style={{...styles.container,...{backgroundColor:props.color}}}><Text style={styles.text} numberOfLines={2}>{props.title}</Text></View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
        gridItem: {
            flex: 1,
            margin: 15,
            height: 150
        },
        container: {
            flex:1,
            borderRadius:10,
            shadowOpacity:0.26,
            shadowOffset: {width: 0, height:2},
            shadowRadius: 10,
            elevation:3,
            justifyContent:'flex-end',
            alignItems:'flex-end',
            padding:15
        },
        text: {
            fontSize:22,
            textAlign:'right'
        }
    }
)

export default CategoryGridTitle;