import * as React from 'react';
import {Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from "../Screens/CategoryScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";


/*const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen
    },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: {
        screen:MealDetailScreen
    }

}); */


const Stack = createStackNavigator();

function MealsNavigation({ navigation, route }) {





    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoryScreen} />
                <Stack.Screen name="Meals Categories" component={CategoryMealScreen} options={({ route }) => ({ title: route.params.name  })} />
                <Stack.Screen name="Meal Detail" component={MealDetailScreen}
                              options={  ({ route }) => ({ headerTitle: route.params.mealName, headerRight:route.params.button}) }


                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MealsNavigation;
 //export default createAppContainer(MealsNavigator);