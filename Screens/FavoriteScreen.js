import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CategoryScreen from "./CategoryScreen";
import {useSelector} from "react-redux";
import MealItem from "../components/MealItem";

function FavoriteScreen({navigation}) {
    const favMeal = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem =(itemData)  => {
        return(
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                image={itemData.item.imageUrl}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {navigation.navigate('Meal Detail',
                    {
                        mealId: itemData.item.id,
                        mealName:itemData.item.title,
                    })}}

            />
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList data={favMeal} renderItem={renderMealItem} style={{width:'90%', paddingVertical:10}}/>


        </View>

);

}

const styles= StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavoriteScreen;