import * as React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";



function CategoryMealScreen( { route, navigation }) {
     //   const catId =  props.navigation.getParam('categoryId');
        const { categoryId } = route.params;


         const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId );

         const displayMeal = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >=0);

         const renderMealItem = itemData => {
             return(
                 <MealItem
                     title={itemData.item.title}
                     duration={itemData.item.duration}
                     image={itemData.item.imageUrl}
                     complexity={itemData.item.complexity}
                     affordability={itemData.item.affordability}
                     onSelectMeal={() => {}}

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
        }
    })
 export default CategoryMealScreen;