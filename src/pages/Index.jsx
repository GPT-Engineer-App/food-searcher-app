import React, { useState } from "react";
import { Box, Input, Button, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  const [foodItem, setFoodItem] = useState("");
  const [foodResults, setFoodResults] = useState([]);

  // Dummy data to simulate API response
  const dummyFoods = [{ description: "Apple" }, { description: "Banana" }, { description: "Carrot" }];

  const fetchFoodInfo = () => {
    // Simulating an API call
    setFoodResults(dummyFoods.filter((food) => food.description.toLowerCase().includes(foodItem.toLowerCase())));
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Heading mb={6}>Food Search App</Heading>
      <Input placeholder="Enter a food item" value={foodItem} onChange={(e) => setFoodItem(e.target.value)} width="300px" />
      <Button onClick={fetchFoodInfo} colorScheme="blue">
        Search
      </Button>

      {foodResults.length > 0 ? (
        <VStack spacing={2}>
          <Text>Foods Found: {foodResults.length}</Text>
          {foodResults.map((food, index) => (
            <Text key={index}>{food.description}</Text>
          ))}
        </VStack>
      ) : (
        <Text>No foods found</Text>
      )}
    </VStack>
  );
};

export default Index;
