# food-searcher-app

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const API_KEY = '0vtI7w39f91aqVJ3istBObBYkGE1vjJPFUmPapQC'; // Your API key
const BASE_URL = 'https://api.nal.usda.gov/fdc/v1/foods/search'; // Base URL for the FDC API

export default function App() {
  const [foodItem, setFoodItem] = useState('');
  const [foodResults, setFoodResults] = useState([]);

  const fetchFoodInfo = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?query=${foodItem}`,
        {
          params: {
            api_key: API_KEY,
            pageSize: 25,
            pageNumber: 2,
            sortBy: 'dataType.keyword',
            sortOrder: 'asc',
          },
        }
      );

      setFoodResults(response.data.foods);
    } catch (error) {
      Alert.alert(
        'Error',
        'Error fetching food data. Please try again later.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a food item"
        value={foodItem}
        onChangeText={setFoodItem}
      />
      <Button title="Search" onPress={fetchFoodInfo} />

      {
        foodResults.length > 0 ? (
          <View style={styles.result}>
            <Text>Foods Found: {foodResults.length}</Text>
            {foodResults.map((food, index) => (
              <Text key={index}>{food.description}</Text>
            ))}
          </View>
        ) : (
          <Text>No foods found</Text>  // Handles no results case
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
});

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/food-searcher-app.git
cd food-searcher-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
