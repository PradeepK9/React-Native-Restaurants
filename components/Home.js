import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import BeautifulButton from "../common/BeautifulButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    margin: 10,
  },
});

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "lightblue",
          margin: 10,
          padding: 20,
          width: 340,
          textAlign: "center",
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../assets/dummy-profile.png")}
        />
        {"\n"}
        {"\n"}
        <Text style={{ color: "#dc143c" }}>Hello, Mr. {user.email}</Text>
        {"\n"}
        <Text style={{ color: "#4b0082" }}>Welcome to RestaurantApp</Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "lightblue",
          margin: 10,
          padding: 20,
          width: 340,
          textAlign: "center",
        }}
      >
        <Text style={{ color: "#dc143c", marginBottom: 10, fontSize: 18 }}>
          Discover the best food & drinks
        </Text>
        {"\n"}
        <Text style={{ marginBottom: 10, fontSize: 18 }}>😋😋</Text>
        {"\n"}
        {"\n"}
        <Text style={{ color: "#8b008b", marginBottom: 10, fontSize: 16 }}>
          Discover the best food & drinks! Explore curated lists of top
          restaurants, cafes, pubs, and bars in Indore, based on trends 👇🏻
        </Text>
        {"\n"}
        {"\n"}
        <BeautifulButton
          onPress={() => navigation.navigate("RestaurantList")}
        />
      </Text>
    </View>
  );
};

export default Home;
