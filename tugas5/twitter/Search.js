import * as React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, DataTable } from "react-native-paper";
export const Searching = () => {
   
    return (
        <ScrollView>
        <View >
            <Image source={require('./images/foto.jpg')} style={{width:360, height:200}}/>
           
            
            <Card style={{ borderWidth: 1 }} >
                <Text style={{fontSize:20, fontWeight:'bold'}}>Trends For Your</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight:'bold'}}>#Vannesa Angel</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#Densus 88</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#7 tahun Jokowi</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#Bitcoin</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#Doge</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#Open BO</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#Halloween</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
                <Text style={{ fontSize: 10 }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold' }}>#VCS</Text>
                <Text style={{ fontSize: 10 }} >12k Tweets</Text>
            </Card>
        </View>
        </ScrollView>
    );
}
