import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import LeftSideBar from "./LeftSideBar";
import DashboardScreen from "./dashboardScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
//import Login from "../Components/login/login"
const WIDTH = Dimensions.get("window").width;
const LeftDrawer = createDrawerNavigator(
  {
    DashboardScreen: { screen: DashboardScreen },
  },
  {
    initialRouteName: "DashboardScreen",
    drawerWidth: WIDTH * 0.8,
    drawerPosition: "left",
    contentOptions: {
      activeTintColor: "#e91e63",
    },
    contentComponent: (props) => <LeftSideBar {...props} />,
    drawerOpenRoute: "LeftSideMenu",
    drawerCloseRoute: "LeftSideMenuClose",
    drawerToggleRoute: "LeftSideMenuToggle",
  }
);
export default LeftDrawer;
