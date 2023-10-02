import React from "react";
import Navigation from "./routes/Navigation";
import {AuthProvider} from "./auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
