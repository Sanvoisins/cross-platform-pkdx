import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
//import { ThemeColors } from "react-navigation";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };
    
    state = {
        email: "",
        password: "",
        errorMessage: null
    };
    
    handleLogin = () => {
        const {email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image source = {require("../../assets/fond.png")} style={{height: 250}}></Image>

                <View style={styles.errorMessage}>
        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>adresse email</Text>
                        <TextInput
                         style={styles.input}
                         autoCapitalize="none" 
                         onChangeText={email => this.setState({email})} 
                         value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style = {{marginTop: 32}}>
                        <Text style={styles.inputTitle}>mot de passe</Text>
                        <TextInput 
                         style={styles.input} 
                         secureTextEntry 
                         autoCapitalize="none"
                         onChangeText={password => this.setState({password})}
                         value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#e05026", fontWeight:"500"}}>Connexion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center", marginTop:32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style= {{color: "white", fontSize: 13}}>
                        Vous n'est pas inscrit ? <Text style={{fontWeight: "500", color: "#e05026"}}>Inscrivez-vous</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor:"black"
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "red",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "white"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#f1ee87",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});