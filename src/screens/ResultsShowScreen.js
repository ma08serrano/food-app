import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item}} />
                }}
            />
        </View>    
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 15
    },  
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;