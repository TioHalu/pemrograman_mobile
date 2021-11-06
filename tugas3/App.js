import React from 'react'
import { Text, View, Image } from 'react-native'
import {AppButton} from './AppButton'
import { AppTextInput } from './AppTextInput'
import { AppHeader, AppContent, AppFooter } from './props'
import { AppState } from './AppState'
import { AppFixedDimension } from './AppFixedDimension'

// function abc(){
//     return "ini function"
    
// }

const HelloWorldApp = () => {
    // var string = abc();
    return ( 
        <View>
          <AppFixedDimension/>

        </View>
    );
}
export default HelloWorldApp;