import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Tab } from 'react-native-elements/dist/Tab';
import { Card, Title, Paragraph, DataTable } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView } from 'react-native-elements/dist/TabView';
import { ScreenContainer } from 'react-native-screens';

export const MessageScreen = () => {

    return (
        <ScrollView style={{ backgroundColor: "black" }}>

            <View style={{ flexDirection: "row", backgroundColor: "white", borderWidth: 1, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/profile.png')} style={{ width: 60, height: 60 }} />
                <Card style={{ width: 280, backgroundColor: "white" }}>
                    <Card.Title title="elon @elonmusik" />
                    <Card.Content>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error, reiciendis pariatur voluptatem molestiae ullam laboriosam odit voluptatum voluptatibus, vero natus possimus ex, corporis libero? Ab dolor cumque quos vitae.</Paragraph>
                       
                    </Card.Content>
                </Card>
            </View>

            

        </ScrollView>
    );
}
