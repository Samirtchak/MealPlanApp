import * as React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";



function CategoryMealScreen( { route, navigation }) {
     //   const catId =  props.navigation.getParam('categoryId');
        const { categoryId } = route.params;

         const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId );


    return(
        <View style={styles.screen}>
                <Text>The categories Meal Screen!</Text>
                <Text>{selectedCategory.title}</Text>

                <Button title="Go to Meals Details" onPress={() => {
                navigation.navigate('Meal Detail')
            }}/>
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