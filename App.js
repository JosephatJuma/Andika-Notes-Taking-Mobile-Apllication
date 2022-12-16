import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Login from "./Components/Login";
import { Entypo } from "@expo/vector-icons";
import { Sign } from "./Components/Sign";
import { useNavigation } from "@react-navigation/native";
function HomeScreen({ navigation }) {
  return (
    <Home
      nav={() => navigation.navigate("Add")}
      login={() => navigation.navigate("Login")}
    />
  );
}
function AddScreen() {
  return <Add />;
}
function LoginScreen() {
  return <Login login={() => navigation.push("Sign")} />;
}
function SignScreen() {
  return <Sign />;
}

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
export default function App() {
  //const n = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6495ed",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 35,
            fontWeight: "900",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Andika", headerShown: false }}
        />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Andika", headerShown: false }}
        />
        <Stack.Screen
          name="Sign"
          component={SignScreen}
          options={{ title: "Register", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
