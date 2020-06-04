import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ImageBackground} from "react-native";

function MealItem(props) {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
      </View>

    );

}
const  styles = StyleSheet.create({
    mealRow: {
        flexDirection:'row'
    },
    mealItem: {
        height:200,
        width:'100%',
        backgroundColor:'rgba(238,238,238,0.96)',
        borderRadius: 10,
        overflow:'hidden'


    },
    mealHeader: {
        height:'85%',

    },
    mealDetail: {
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',


    },
    bgImage: {
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',


    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title: {
        fontSize: 20,
        color: 'white',

        textAlign:'center'
    }
})

export default MealItem;
