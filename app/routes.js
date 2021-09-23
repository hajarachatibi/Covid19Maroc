import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./screens/loginScreen";
import DashboardScreen from "./screens/dashboardScreen";
import AuthLoadingScreen from "./screens/authLoadingScreen";
import CreateAccountScreen from "./screens/createAccountScreen";
import LeftDrawer from "./screens/LeftDrawer";
import MapScreen from "./screens/MapScreen";
import FicheScreen from "./screens/FicheScreen";

const BeforeSignin = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Login",
  }
);

const AfterSignin = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
    },
    LeftDrawer: { screen: LeftDrawer },
  },
  // {
  //   headerMode: "none",
  //   initialRouteName: "Dashboard",
  // },
  {
    initialRouteName: "LeftDrawer",
    headerMode: "none",
    swipeEnabled: false,
  }
);
const NewAccount = createStackNavigator(
  {
    Create: {
      screen: CreateAccountScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Create",
  }
);
const Addmap = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Map",
  }
);
const AddFiche = createStackNavigator(
  {
    Fiche: {
      screen: FicheScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Fiche",
  }
);

const AppNavigator = createStackNavigator(
  {
    Auth: BeforeSignin,
    App: AfterSignin,
    NewAcc: NewAccount,
    AuthLoadingScreen: AuthLoadingScreen,
    MyMap: Addmap,
    MyFiche: AddFiche,
  },
  {
    headerMode: "",
    initialRouteName: "Auth",
  }
);

export default createAppContainer(AppNavigator);
