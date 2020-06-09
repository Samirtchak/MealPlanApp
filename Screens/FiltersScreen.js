import React, {useState,useEffect,useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import CategoryScreen from "./CategoryScreen";
import {Ionicons} from "@expo/vector-icons";





function FiltersScreen({navigation,route}) {



    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const filtre = {
        glutenFree:isGlutenFree,
        lactoseFree:isLactoseFree,
        vegan:isVegan,
        vegetarian:isVegetarian
    }

    const saveFilters = () => {
       const filters = {
           glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegetarian:isVegetarian
        }

        return filters
    }


    //TODO: SAVE FILTERS



    const SwitchComp = props => {
        return(
            <View style={styles.container}>
                <Text>{props.label}</Text>
                <Switch
                    trackColor={{true: 'green'}}
                    value={props.state}
                    onValueChange={props.onChange}
                />
            </View>
        );
    }


    return(
        <View style={styles.screen}>
            <SwitchComp  label="Gluten Free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <SwitchComp  label="Lactose Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <SwitchComp  label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <SwitchComp  label="Vegetarian" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>

    );

}

const styles= StyleSheet.create({
    screen: {
        paddingTop:10,
        flex:1,
        alignItems:'center'
    },
    container: {
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
        marginVertical:15
    }
})

export default FiltersScreen;