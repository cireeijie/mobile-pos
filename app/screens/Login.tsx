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
import { COLORS } from "../../assets/styles/colors";
import { defaults } from "../../assets/styles/exports";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [registration, setRegistration] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    setMessage("Logging In...");
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      setMessage("Login success!");
    } catch (error) {
      setMessage("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    setMessage("Signing up...");
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setMessage("Signup success!");
    } catch (error) {
      setMessage("Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={defaults.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={defaults.formContainer}>
          <Text style={defaults.title}>
            {registration ? "Register" : "Login"}
          </Text>
          <View style={defaults.inputGroup}>
            <TextInput
              style={defaults.input}
              value={email}
              placeholderTextColor={COLORS.darkGray}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              style={defaults.input}
              secureTextEntry={true}
              value={password}
              placeholderTextColor={COLORS.darkGray}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <Text style={{ textAlign: "center" }}>{message}</Text>
          </View>

          {loading ? (
            <>
              <ActivityIndicator size="small" color={COLORS.primary} />
            </>
          ) : (
            <>
              {!registration ? (
                <>
                  <Button
                    color={COLORS.primary}
                    title="Login"
                    onPress={signIn}
                  />
                  <Text
                    onPress={() => {
                      setRegistration(true);
                      setMessage("");
                      setEmail("");
                      setPassword("");
                    }}
                    style={defaults.linkedText}
                  >
                    Create an account
                  </Text>
                </>
              ) : (
                <>
                  <Button
                    color={COLORS.primary}
                    title="Signup"
                    onPress={signUp}
                  />
                  <Text
                    onPress={() => {
                      setRegistration(false);
                      setMessage("");
                      setEmail("");
                      setPassword("");
                    }}
                    style={defaults.linkedText}
                  >
                    Already have an account? Login
                  </Text>
                </>
              )}
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
