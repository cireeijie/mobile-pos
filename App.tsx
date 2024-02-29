import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { useFonts } from "expo-font";
import { InterFonts } from "./assets/fonts/InterFonts";
import { userContext } from "./context/useContext";

import Login from "./app/screens/Login";
import Admin from "./app/screens/Admin";
import Loading from "./components/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(InterFonts);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      userContext.userInfo = user;
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen
              name={user ? "Admin Dashboard" : "Login"}
              component={user ? Admin : Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
