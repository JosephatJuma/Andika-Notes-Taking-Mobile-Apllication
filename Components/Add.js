import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Input } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { app } from "../firebaseConfig";
import { ref, set } from "firebase/database";
import { database } from "../firebaseConfig";

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleAdd = () => {
    if (!title) {
      alert("You are required to set the title for this note");
      return;
    }
    if (!content) {
      alert("Seems there is nothing to save");
      return;
    }
    // console.log(title);
    //const db = getDatabase();

    set(ref(database, "/notes/" + title), {
      //id: id,
      title: title,
      content: content,
    });
  };
  return (
    <View style={styles.add}>
      <StatusBar style="light" backgroundColor="#6495ed" />
      <View style={styles.add}>
        <Text style={{ fontSize: 30, fontWeight: "900", color: "#6495ed" }}>
          Taking Notes
        </Text>
        <Input
          placeholder="Add title"
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          style={[styles.title, styles.input]}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Input
          style={[styles.content, styles.input]}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          multiline={true}
          placeholder="Start Typing......."
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <TouchableOpacity style={styles.save} onPress={handleAdd}>
          <Text style={{ fontSize: 25, color: "#fff", fontWeight: "800" }}>
            Save
          </Text>
          <Entypo name="save" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  add: {
    flex: 1,
    backgroundColor: "#fff0f5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#6495ed",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 20,
    fontWeight: "800",
    color: "#6495ed",
  },
  content: {
    height: 200,
  },
  title: {
    borderRadius: 10,
    borderColor: "#6495ed",
  },
  save: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#6495ed",
    width: "50%",
    padding: 10,
    borderRadius: 8,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    margin: 10,
  },
});
