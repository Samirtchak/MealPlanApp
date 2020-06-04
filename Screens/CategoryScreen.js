import * as React from 'react';
import {View,Text,StyleSheet,Button,FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {Value} from "react-native-reanimated";


const styles= StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        color:'black',
        alignItems:'center'
    },
    gridItem: {
        flex:1,
        margin:15,
        height:150
    }
})

function CategoryScreen(props) {

    const  renderGridItem = (itemData) => {

        return  (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate('Meals Categories',
                    {
                        categoryId: itemData.item.id,
                        name: itemData.item.title
                    })




            }}>

                <View><Text>{itemData.item.title}</Text></View>
            </TouchableOpacity>
        );

    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

        </FlatList>

    );

}


export default CategoryScreen;