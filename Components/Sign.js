import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Input, CheckBox } from "@rneui/base";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Sign = () => {
  const nav = useNavigation();
  const [show, setShow] = useState(false);
  return (
    <View style={styles.login}>
      <StatusBar style="light" backgroundColor="#6495ed" />
      <Text style={{ color: "#6495ed", fontSize: 25, fontWeight: "700" }}>
        Login to see your Maandiko!
      </Text>
      <Input
        style={styles.input}
        inputContainerStyle={{
          borderBottomWidth: 0,
          borderBottomColor: "#6495ed",
        }}
        placeholder="Your email"
      />
      <Input
        style={styles.input}
        inputContainerStyle={{
          borderBottomWidth: 0,
          borderBottomColor: "#6495ed",
        }}
        placeholder="Your password"
        secureTextEntry={show}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <CheckBox
          containerStyle={{ backgroundColor: "#fff0f5" }}
          checked={show}
          onPress={() => setShow(!show)}
        />
        <Text style={{ color: "#6495ed", fontWeight: "700" }}>
          Show password?
        </Text>
      </View>
      <TouchableOpacity style={[styles.button, styles.loginButton]}>
        <Text style={[styles.buttonText, { color: "#fff" }]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={[styles.buttonText, { color: "#6495ed" }]}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff0f5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 15,
    marginTop: 25,
    borderColor: "#6495ed",
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#6495ed",
    borderBottomWidth: 5,
  },
  inputCon: {
    borderWidth: 2,
    borderColor: "#6495ed",
    borderBottomWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  button: {
    width: "70%",
    alignContent: "center",
    alignItems: "center",
    height: 60,
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  loginButton: { backgroundColor: "#6495ed" },
  signupButton: {
    borderColor: "#6495ed",
    borderWidth: 3,
  },

  buttonText: { fontSize: 25, fontWeight: "700" },
});
