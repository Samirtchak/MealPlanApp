import * as React from 'react';
import {Button,TouchableOpacity,View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from "../Screens/CategoryScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from "../Screens/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from "../Screens/FiltersScreen";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavig} />
            <Drawer.Screen name="Favorites" component={FavNavigator} />
            <Drawer.Screen name="Filter" component={FilterNavigator} />

        </Drawer.Navigator>
    );
}



function MealsNavigation({ navigation, route }) {

    return (
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoryScreen} options={{headerLeft: () => (
                        <View style={{paddingLeft:10}}>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Ionicons name="ios-menu" size={30}  />
                            </TouchableOpacity>
                        </View>
                       )}} />

                <Stack.Screen name="Meals Categories" component={CategoryMealScreen} options={({ route }) => ({ title: route.params.name  })} />
                <Stack.Screen name="Meal Detail" component={MealDetailScreen}
                              options={  ({ route }) => ({ headerTitle: route.params.mealName, headerRight:route.params.button}) }
                />
            </Stack.Navigator>


    );
}

const  Fav = createStackNavigator();

function FavNavigator({navigation}) {
    return (

     <Fav.Navigator>
         <Fav.Screen name="Favorites" component={FavoriteScreen} options={{headerLeft: () => (
                 <View style={{paddingLeft:10}}>
                 <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                     <Ionicons name="ios-menu" size={30}  />
                 </TouchableOpacity>
                 </View>
             )}}/>
         <Fav.Screen name="Meal Detail" component={MealDetailScreen}/>

     </Fav.Navigator>
    );
}

const Filter = createStackNavigator()

function FilterNavigator({navigation}) {
    return (
    <Filter.Navigator>
        <Filter.Screen name="Filter Meal" component={FiltersScreen} options={{headerLeft: () => (
            <View style={{paddingLeft:10}}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Ionicons name="ios-menu" size={30}  />
                </TouchableOpacity>
            </View>
            )}}/>

    </Filter.Navigator>
    )
}


function TabNavig() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Meals') {
                            iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
                        } else if (route.name === 'Favorites') {
                            iconName = focused ? 'ios-star' : 'ios-star';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}


            >
                <Tab.Screen name="Meals" component={MealsNavigation} />
                <Tab.Screen name="Favorites" component={FavNavigator} />

            </Tab.Navigator>

    );

}

function NavFinal() {
    return(
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
    )

}

export  default NavFinal;

//export default MealsNavigation;
 //export default createAppContainer(MealsNavigator);