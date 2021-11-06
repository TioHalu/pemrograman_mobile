import React from 'react';
import { View } from 'react-native';
const AppFlexDimensions = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 100, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ height: 100, backgroundColor: 'steelblue' }} />
        </View>

    );
};
export default AppFlexDimensions;

