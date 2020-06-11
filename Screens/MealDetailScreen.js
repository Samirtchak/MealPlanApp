import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from "react-redux";
import {toggleFavorite} from "../store/actions/actionmeals";
import {useCallback, useEffect, useLayoutEffect} from "react";
import {Icon} from "react-native-elements";






function MealDetailScreen({route,navigation}) {
    const {mealId} = route.params;
    const availableMeals = useSelector(state => state.meals.meals)

    const dispatch = useDispatch()
    const selectedMeal =  availableMeals.find(meal => meal.id === mealId)

    const toggleFavoriteHandler =  () => {
        dispatch(toggleFavorite(selectedMeal.id))
    }




  //  const {toggleFav} = route.params


    const  ButtonFav = (props) => {
        return(
            <TouchableOpacity onPress={props.toggleFav}>
                <Icon
                    name="ios-star"
                    type='ionicon'
                />
            </TouchableOpacity>

        )
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: selectedMeal.name,
            headerRight: () => (
                <ButtonFav toggleFav={toggleFavoriteHandler}/>
            ),
        })
    })




    const ListItem = (props) => {
        return(
          <View style={styles.listItem}>
              <Text>{props.detail}</Text>
          </View>
        );
    }

   const ImageMeal = () => {
       return (
      <View style={{flex:1}}>
          <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
           <View style={{...styles.mealRow,...styles.mealDetail}}>
            <Text>{selectedMeal.duration}</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
           </View>
      </View>
       )
   }



    return(
        <ScrollView >
            <ImageMeal />

            <Text  style={styles.title}>INGREDIENT</Text>
                {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient} detail={ingredient}/>)}
            <Text style={styles.title}>STEPS</Text>
                {selectedMeal.steps.map(step => <ListItem key={step} detail={step}/>)}
        </ScrollView>

    );

}



const styles= StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    listItem: {
        borderWidth:1,
        borderColor:'black',
        flexDirection: 'column',
        margin:10,
    },
    imageContainer: {
        width:'100%',
        height:'100%',
    },
    mealRow: {
        flexDirection:'row',
        backgroundColor:'grey',
        marginBottom:10
    },
    mealDetail: {
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    image: {
        width:'100%',
        height:200
    },
    title: {
        fontWeight:'bold',
        fontSize:26,
        textAlign:'center'
}
})

export default MealDetailScreen;