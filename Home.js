import React,{useState} from 'react';
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "@expo/vector-icons/AntDesign"; 

const Home = () => {
  const {navigate} = useNavigation();
  const [todo, setTodo] = useState([
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
  ]);
  console.log(Platform.OS);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appHeader}>Todo app</Text>
      <TextInput style={styles.input} placeholder="Enter Title" />
      <TextInput style={styles.input} placeholder="Enter Description" />

      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        <Text style={{ color: "#fff" }}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterBtn, styles.activeFilterBtn]}>
          <Text style={[styles.filterText, { color: "#fff" }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText} activeOpacity={0.8}>
            In progress
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText} activeOpacity={0.8}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable 
          style={styles.todosContainer} 
          onPress={() => navigate("TodoDetails", item)}
          >
            <Text>{item.title}</Text>
            <View style={styles.iconsContainer}>
              {Platform.OS === "android" ? (
                <AntDesign name="checkcircleo" size={24} color="green" style={{marginRight:'6'}}/>
              ) : (
                <AntDesign name="checkcircleo" size={24} color="black" style={{marginRight:'6'}} />
              )}
              <Feather name="trash" size={24} color="red" />
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  appHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Home;
