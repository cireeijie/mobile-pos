import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const style = require("../../assets/styles/defaultStyles");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registration, setRegistration] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Login success!");
    } catch (error) {
      console.log(error);
      alert("Signin failed.");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Signup success!");
    } catch (error) {
      console.log(error);
      alert("Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={style.formContainer}>
          <Text style={style.title}>{registration ? "Register" : "Login"}</Text>
          <View style={style.inputGroup}>
            {registration && (
              <>
                <TextInput
                  style={style.input}
                  value={firstName}
                  placeholder="First name"
                  autoCapitalize="none"
                  onChangeText={(text) => setFirstName(text)}
                ></TextInput>
                <TextInput
                  style={style.input}
                  value={lastName}
                  placeholder="Last name"
                  autoCapitalize="none"
                  onChangeText={(text) => setLastName(text)}
                ></TextInput>
              </>
            )}
            <TextInput
              style={style.input}
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              style={style.input}
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>

            {registration && (
              <TextInput
                style={style.input}
                secureTextEntry={true}
                value={password}
                placeholder="Confirm password"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              ></TextInput>
            )}
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              {!registration ? (
                <>
                  <Button title="Login" onPress={signIn} />
                  <Button
                    title="Create an account"
                    onPress={() => setRegistration(true)}
                  />
                </>
              ) : (
                <>
                  <Button title="Signup" onPress={signUp} />
                  <Button
                    title="Already have an account? Login"
                    onPress={() => setRegistration(false)}
                  />
                </>
              )}
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
