import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//import { DrawerActions } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Form,
  Item,
  Input,
  Label,
} from "native-base";

class DashboardScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }
            >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={styles.textstyle}>Bienvenue</Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textstyle: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 50,
    fontSize: 40,
    color: "#9E95B3",
    fontWeight: "bold",
  },
});

export default DashboardScreen;
