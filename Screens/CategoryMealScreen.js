import * as React from 'react';
import {View,Text,StyleSheet,FlatList,Button, TouchableOpacity} from 'react-native';
import {useSelector} from "react-redux";
import {CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {Icon} from "react-native-elements";


import MealList from "../components/MealList";

function CategoryMealScreen({route,navigation}) {
     //   const catId =  props.navigation.getParam('categoryId');

    const { categoryId } = route.params;

    const  availableMeals = useSelector(state => state.meals.filteredMeals)

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId );

    const displayMeal = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >=0);

  /*  const  buttonFav = () => {
        const {toggleFav} = route.params
        return(
            <TouchableOpacity onPress={toggleFav}>
                <Icon
                    name="ios-star"
                    type='ionicon'
                />
            </TouchableOpacity>


        )
    } */

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
                        //button:buttonFav
                    })}}

            />
        )
    }


    return(
        <View style={styles.screen}>

            <FlatList data={displayMeal} renderItem={renderMealItem} style={{width:'90%', paddingVertical:10}}/>

        </View>

    );

}

/*CategoryMealScreen.navigationOptions =  navigationData => {
   const catId =  navigationData.navigation.getParam('categoryId');
   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

   return {
       headerTitle: selectedCategory.title
   }

}*/


    const styles= StyleSheet.create({
        screen: {
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
    })
 export default CategoryMealScreen;