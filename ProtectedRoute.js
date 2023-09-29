import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";

const ProtectedRoute = ({ children }) => {
  console.log("ProtectedRoute......");
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  if (user) {
    return children;
  } else {
    navigation.navigate("Login");
    return null;
  }
};

export default ProtectedRoute;
