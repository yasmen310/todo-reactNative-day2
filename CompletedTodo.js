import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const CompletedTodo = () => {
  const completedTasks = [
    { id: '1', title: 'Complete React Native project', completed: true },
    { id: '2', title: 'Learn about Redux', completed: true },
    { id: '3', title: 'Finish reading a book', completed: true },
    { id: '4', title: 'Go for a walk', completed: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Completed Tasks</Text>
      
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.title}</Text>
            <Text style={styles.completedText}>✓</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  taskContainer: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taskText: {
    fontSize: 18,
    color: '#555',
    textDecorationLine: 'line-through',
  },
  completedText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default CompletedTodo;
