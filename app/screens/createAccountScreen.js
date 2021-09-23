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
import * as Font from "expo-font";
class CreateAccountScreen extends React.Component {
  state = {
    username: "",
    password: "",
    // loading: false,
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

  doCreate() {
    // "email": "eve.holt@reqres.in",
    // "password": "pistol",
    // axios.post("https://reqres.in/api/register", req);
    try {
      const { username, password } = this.state;
      const req = {
        email: username,
        password: password,
      };
      axios.post("https://reqres.in/api/register", req);
    } catch (error) {
      console.warn(error);
    }

    //       this.setState({
    //         loading: true,
    //       });
    //.then(
    //         (res) => {
    //           this.setState({
    //             loading: false,
    //           });
    //           AsyncStorage.setItem("token", res.data.token).then((res) => {
    //             this.props.navigation.navigate("App");
    //           });
    //         },
    //         (err) => {
    //           this.setState({
    //             loading: false,
    //           });
    //           alert("username or password is wrong");
    //         }
    //       );
    //     } else {
    //       alert("Enter username and password");
    //     }
  }

  render() {
    const { username, password } = this.state;
    //    const username;
    //    const password;
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <Text style={styles.welcometext}>Créez votre compte</Text>

          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Nom d'utilisateur"
              value={username}
              onChangeText={(value) => this.onChangeHandle("username", value)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Mot de passe"
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => this.onChangeHandle("password", value)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirmer le mot de passe"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signinbtn}
            onPress={() => this.doCreate()}
          >
            <Text style={styles.signintxt}>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateAccountScreen;

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
