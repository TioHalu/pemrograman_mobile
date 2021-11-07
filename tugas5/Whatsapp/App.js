import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import MyTab from './Navigation'


const AppHome () => {
    return(
      <SafeAreaProvider>
      <Mytab/>
      </SafeAreaProvider>
    );
}
export default AppHome;