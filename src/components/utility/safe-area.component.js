import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
const height = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const RestaurantSafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  margin-top: ${height};
`;
