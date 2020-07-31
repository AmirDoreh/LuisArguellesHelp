import React from "react";
import { StyleSheet, View, Text, Image, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TouchableOpacity,
  Directions,
  TouchableHighlight,
} from "react-native-gesture-handler";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginLogo}> tmo. </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          fontFamily: "Roboto",
          textAlign: "center",
          color: "#fff",
          paddingBottom: 50,
        }}
      >
        {" "}
        Iniciar sesión{" "}
      </Text>
      <TouchableOpacity
        style={styles.emailButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Tu correo electrónico
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.categoriesContainer}>
        {/* THIS IS THE FIRST OPTION YOU CAN USE  */}
        <View>
          <View style={{ width: 100, height: 100 }}>
            <Image
              style={{ flex: 1, width: null }}
              source={require("./img/cervecerias.png")}
            />
          </View>
        </View>

        {/* THIS IS THE SECOND OPTION YOU CAN USE  */}
        <View style={{ width: 200, height: 100 }}>
          <Image
            style={{ flex: 1 }}
            source={require("./img/Cocktails.png")}
            resizeMode="contain"
          />
          <Text style={styles.categoriesText}> Cocktails</Text>
        </View>
        {/*
                    <View style = { styles.categoryContainer }>
                        <Image 
                            style = {styles.categoriesImages}
                            source = {require('./img/Speakeasy.png')}
                        />
                        <Text style =  { styles.categoriesText }> Speakeasy</Text>
                    </View> 

                    <View style = { styles.categoryContainer }>
                        <Image 
                            style = {styles.categoriesImages}
                            source = {require('./img/Terrazas.png')}
                        />
                        <Text style =  { styles.categoriesText }>   Terrazas</Text>
                    </View> */}
      </View>
    </View>
  );
};

export const Cervecerias = ({ navigation }) => {
  return (
    <View>
      <Text> Cervecerias </Text>
    </View>
  );
};

export const Cocktails = ({ navigation }) => {
  return (
    <View>
      <Text> Cocktails </Text>
    </View>
  );
};

export const Speakeasy = ({ navigation }) => {
  return (
    <View>
      <Text> Speakeasy </Text>
    </View>
  );
};

export const Terrazas = ({ navigation }) => {
  return (
    <View>
      <Text> Terrazas </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#0A1D3F",
    flex: 1,
  },
  loginLogo: {
    color: "#1FCEAC",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 25,
    textAlign: "center",
  },
  emailButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
  },
  categoriesContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },

  categoriesText: {
    fontFamily: "Roboto",
    marginTop: 3,
    fontSize: 13,
    fontWeight: "bold",
  },
  touchable: {
    height: 70,
    width: 70,
  },
});
