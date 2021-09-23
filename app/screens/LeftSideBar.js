import React, { Component } from "react";
import {
  Content,
  List,
  Header,
  Body,
  Title,
  ListItem,
  Container,
  Left,
  Right,
  Icon,
  Text,
  Badge,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from "react-navigation";
import { DrawerActions } from "react-navigation-drawer";
export default class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigate);
  };
  doLogOut() {}
  render() {
    return (
      <ScrollView>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Menu</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List>
              <ListItem
                onPress={() => this.props.navigation.navigate("MyMap")}
                selected
              >
                <Left>
                  <Text>Carte géographique</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem
                onPress={() => this.props.navigation.navigate("MyFiche")}
              >
                <Left>
                  <Text>Fiche d'investigation</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate("Auth")}>
                <Left>
                  <Text>Déconnexion</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
