import React, { Component, useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { ListItem, Image, Avatar } from 'react-native-elements';


export default function ListComponent ({ navigation }) {
    useEffect(() => {
        getPokemons();
    },[]);
    const [pokemons, setPokedex]=useState([]);

    const getPokemons = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
        )
        const pokemons = await data.json();
        console.log(pokemons)
        console.log(pokemons.results)
        setPokedex(pokemons.results);
    }
    function getDetailPokemon(linkPokemon) {
        return fetch(linkPokemon)
            .then((response) => response.json())
            .then((responseJson) => {
            return responseJson;
            })
            .catch((error) => {
            console.error(error);
            });
    }
    function addIndex(pokemons){
        let i = 1
        pokemons = pokemons.map(function(element) {

            element.detail = getDetailPokemon(element.url)
            element.index = i
            element.image = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`
            i = i+1
            return element
        })
        console.log(pokemons) 
    }
    return (
        <ScrollView style={styles.container}>
            {addIndex(pokemons)}
            {pokemons.map(pokemon => (
                <TouchableHighlight 
                    key={pokemon.index}
                    style={styles.container}
                    onPress={() => {
                        navigation.navigate('detail', {
                            itemId: pokemon.index,
                            otherParam: pokemon,
                        });
                    }}
                >
                    <ListItem
                        style={styles.container}
                        title={pokemon.name}
                        subtitle={
                            <View style={styles.subtitleView}>
                            <Text style={styles.ratingText}>{pokemon.index}</Text>
                            </View>
                        }
                        leftAvatar={
                            <Avatar
                                size="large"
                                source={{ uri: pokemon.image }} 
                                activeOpacity={0.7}
                                backgroundColor="white"
                            />
                        }
                    />
                </TouchableHighlight>
            ))} 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 0,
      height: 50,
      paddingTop: 5
    },
    ratingText: {
      color: 'grey'
    },
    container: {
        backgroundColor: 'red'
    }
  })



