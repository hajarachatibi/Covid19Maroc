import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import CreateAccountScreen from "./createAccountScreen";
import * as Font from "expo-font";
class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
    loading: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  onChangeHandle(state, value) {
    this.setState({
      [state]: value,
    });
  }

  doLogin() {
    const { username, password } = this.state;
    if (username && password) {
      const req = {
        email: username,
        password: password,
      };

      this.setState({
        loading: true,
      });
      axios.post("https://reqres.in/api/login", req).then(
        (res) => {
          this.setState({
            loading: false,
          });
          AsyncStorage.setItem("token", res.data.token).then((res) => {
            this.props.navigation.navigate("App");
          });
        },
        (err) => {
          this.setState({
            loading: false,
          });
          alert("username or password is wrong");
        }
      );
    } else {
      alert("Enter username and password");
    }
  }

  render() {
    const { username, password, loading } = this.state;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/bg.jpg")} />
        <View style={styles.formWrapper}>
          <Text style={styles.welcometext}>Bienvenue</Text>

          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Tapez votre nom d'utilisateur"
              value={username}
              onChangeText={(value) => this.onChangeHandle("username", value)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Tapez votre mot de passe"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => this.onChangeHandle("password", value)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signinbtn}
            onPress={() => this.doLogin()}
            disabled={loading}
          >
            <Text style={styles.signintxt}>
              {loading ? "Loading..." : "Connexion"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.createbtn}>
            <Text
              style={styles.createtxt}
              onPress={() => this.props.navigation.navigate("NewAcc")}
            >
              Créer un compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  formWrapper: {
    width: "80%",
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#9E95B3",
    height: 40,
    paddingHorizontal: 10,
  },
  welcometext: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 50,
    fontSize: 40,
    color: "#9E95B3",
    fontWeight: "bold",
  },
  image: {
    height: "30%",
    width: "100%",
    top: 40,
    position: "absolute",
  },
  signinbtn: {
    backgroundColor: "#1532BB",
    paddingVertical: 10,
  },
  createbtn: {
    backgroundColor: "white",
    paddingVertical: 5,
    marginTop: 20,
  },
  signintxt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  createtxt: {
    color: "blue",
    textAlign: "center",
    fontSize: 18,
  },
});
