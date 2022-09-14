import * as React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 10px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Name",
    icon,
    images = [
      "https://www.foodiesfeed.com/wp-content/uploads/2022/07/steak-tartare-and-beef-sashimi.jpg",
    ],
    address = "Some Street Lahore",
    isOpenNow = true,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: images[0] }} />
      <Title> {name} </Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
});
