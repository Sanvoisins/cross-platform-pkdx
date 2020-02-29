import React, { Component, useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { ListItem, Image, Icon, Card, Button } from 'react-native-elements';

export default function DetailComponent ({ route }) {
    const itemId = 1
    useEffect(() => {
        fetchPokemons();
    },[]);

    const [pokemons,setPokemons]=useState([]);

    const fetchPokemons = async () => {
        const fetchPokemons = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${itemId}`
        );
        const pokemons = await fetchPokemons.json();
        console.log(pokemons.types);
        setPokemons(pokemons);

        //setPokemonsA(pokemons.abilities);
    };
    return (
        <View>
            <Card
            title={pokemons.name}
            image={{uri: `https://pokeres.bastionbot.org/images/pokemon/${itemId}.png`}}
            imageStyle={{height:400}}>
            <Text style={{marginBottom: 10}}>Numéro {pokemons.id}</Text>
            <Text style={{marginBottom: 10}}>Basic experience : {pokemons.base_experience}</Text>
            <Text style={{marginBottom: 10}}>Weight : {pokemons.weight}</Text>
            <Text style={{marginBottom: 10}}>Height : {pokemons.height}</Text>
            <Text style={{marginBottom: 10}}>Order : {pokemons.order}</Text>
            
            <Button
                icon={
                    <Icon
                    name="star"
                    size={25}
                    color="yellow"
                    />
                }
                iconRight
                type="outline"
                buttonStyle={{borderColor: 'black'}}
                titleStyle={{color: 'black'}}
                title="Make Favorite "
            />
            </Card>
        </View>
    )
}
