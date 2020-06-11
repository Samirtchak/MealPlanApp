import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from "./navigation/MealsNavigation";
import NavFinal from "./navigation/MealsNavigation";
import {createStore, combineReducers} from "redux";
import mealsReducer from "./store/reducers/meals";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
  meals:mealsReducer
})

const  store = createStore(rootReducer);


export default function App() {
  return(

  <Provider store={store}>
    <NavFinal/>
  </Provider>
  )
}


