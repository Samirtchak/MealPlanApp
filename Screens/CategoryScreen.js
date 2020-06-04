import * as React from 'react';
import {View,Text,StyleSheet,Button,FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import {Value} from "react-native-reanimated";
import CategoryGridTitle from "../components/CategoryGridTitle";


const styles= StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        color:'black',
        alignItems:'center'
    }

})

function CategoryScreen(props) {

    const  renderGridItem = (itemData) => {

        return  (
            <CategoryGridTitle title={itemData.item.title} onSelect={() =>props.navigation.navigate('Meals Categories',
                {
                    categoryId: itemData.item.id,
                    name: itemData.item.title
                })}
                color={itemData.item.color}
            />
        );

    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

        </FlatList>

    );

}


export default CategoryScreen;