import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TodoDetails = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  console.log(params); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID: {params?.id}</Text>
      <Text style={styles.text}>Title: {params?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TodoDetails;
