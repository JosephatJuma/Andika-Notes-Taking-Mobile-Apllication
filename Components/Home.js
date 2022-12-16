import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Header, SpeedDial } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const Home = ({ nav, login }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "My plan for tomorrow",
      content: "Here there!",
      color: "#ff4500",
    },
    {
      id: 2,
      title: "God is the master Planner",
      content: "Here there!",
      color: "#7fffd4",
    },
    {
      id: 3,
      title: "Critical Thinking",
      content: "Here there!",
      color: "#20b2aa",
    },
    {
      id: 4,
      title: "Creative thinking",
      content: "Here there!",
      color: "#ff69b4",
    },
    {
      id: 5,
      title: "Introduction to computer programming in C",
      content: "Here there!",
      color: "#ffc0cb",
    },
    {
      id: 6,
      title: "The gamne of the day",
      content: "Here there!",
      color: "#ffbcd9",
    },
    {
      id: 7,
      title: "The Journey of a victor",
      content: "Here there!",
      color: "#cd5c5c",
    },
    {
      id: 8,
      title: "Tomoorrow is a new day , plan well and see good results then",
      content: "Here there!",
      color: "#fe6f5e",
    },
  ]);

  useEffect(() => {
    const starCountRef = ref(database, "notes/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //console.log(Object.keys(data).length);
      let num = 1;
      // while (num <= Object.keys(data).length) {
      //   let id = Math.floor(Math.random() * 101);
      //   const newNote = {
      //     id: id,
      //     title: data.title,
      //     content: data.content,
      //     color: "#ffc0cb",
      //   };
      //   setNotes([...notes, newNote]);
      //   //console.log(newNote.id + "added");
      //   console.log(newNote);
      //   // while (num > 0) {
      //   //
      //   //
      //   // }

      //   num++;
      // }
      // for (let i = 0; i < snapshot.val().length; i++) {
      //   console.log(snapshot.val());
      // }
      // console.log(data);
      let dt = [];
      snapshot.forEach((data) => {
        console.log(data.val());
        //setNotes([...notes, data.val()]);
        //console.log(data.val().title);
        const id = notes.length + 1;
        const newNote = {
          id: id,
          title: data.val().title,
          content: data.val().content,
          color: "#ffc0cb",
        };
        return dt.push(newNote);

        //console.log(newNote);
        //notes.push(newNote);
      });
      console.log(dt.values());
      //console.log(notes);
      //setNotes([...notes, dt.values()]);
    });
  }, []);

  // useEffect(() => {
  //   const starCountRef = ref(database, "notes/");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot;
  //     console.log(data);
  //     let dt = [];
  //     snapshot.forEach((doc) => {
  //       //return dt.push({ ...doc.data(), id: doc.id });
  //     });
  //     setNotes([...notes, dt]);
  //   });
  // }, []);
  return (
    <View style={styles.home}>
      <StatusBar style="light" backgroundColor="#6495ed" />
      <Header
        containerStyle={{ backgroundColor: "#6495ed" }}
        leftComponent={
          <View style={{ width: 150 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 35,
                fontWeight: "900",
                color: "#fff",
              }}
            >
              Andika
            </Text>
          </View>
        }
        rightComponent={
          <TouchableOpacity onPress={login}>
            <Entypo name="lock" size={35} color="#fff" />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {notes &&
          notes.map((not) => {
            return (
              <TouchableOpacity
                key={not.id}
                style={[styles.note, { backgroundColor: not.color }]}
              >
                <Text style={{ fontWeight: "700", fontSize: 30 }}>
                  {not.id}
                </Text>
                <View style={{ width: "80%" }}>
                  <Text style={styles.notTitle}>{not.title}</Text>
                  <Text>{not.content}</Text>
                  <Text>{not.color}</Text>
                </View>
                <MaterialIcons name="cancel" size={35} color="#000000" />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <TouchableOpacity
        touchSoundDisabled={false}
        onPress={nav}
        style={{
          backgroundColor: "#6495ed",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "900" }}>
          Create Note
        </Text>
        <Ionicons name="ios-add-circle" size={50} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff0f5",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  scroll: {
    width: "99%",
    backgroundColor: "#fff",
    height: 600,
    alignSelf: "center",
  },
  note: {
    width: "98%",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    height: 100,
    borderColor: "#ffd700",
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRightWidth: 10,
    borderRightColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 5,
  },
  notTitle: { color: "#000000", fontSize: 20, fontWeight: "900" },
});
// const [notes, setNotes] = useState([]); //the notes are to be stored here
// useEffect(() => {
//   const starCountRef = ref(database, "notes/");
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot;
//     console.log(data); //dat is console logged
//     snapshot.forEach((data) => {
//       //Trying to add to the current notes
//       setNotes([...notes, data]); // This sets notes to undefined
//     });
//   });
// }, []);
