import React from "react";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  };
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, () =>
          console.log("State: ", this.state)
        ),
      (error) => console.log("Error: ", error)
    );
  }
  render() {
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 10,
              longitudeDelta: 5,
            }}
          >
            <Marker
              coordinate={{ latitude: 35.765204, longitude: -5.866058 }}
              title="Tanger-Tétouan-Al Hoceïma"
              description="Les contaminations: "
              key="tanger"
            />
            <Marker
              coordinate={{ latitude: 34.706659, longitude: -1.912628 }}
              title="L'Oriental"
              description="Les contaminations: "
              key="oujda"
            />
            <Marker
              coordinate={{ latitude: 34.044712, longitude: -5.024059 }}
              title="Fès-Meknès"
              description="Les contaminations: "
              key="fes"
            />
            <Marker
              coordinate={{ latitude: 33.976317, longitude: -6.830486 }}
              title="Rabat-Salé-Kénitra"
              description="Les contaminations: "
              key="rabat"
            />
            <Marker
              coordinate={{ latitude: 32.336991, longitude: -6.37117 }}
              title="Béni Mellal-Khénifra"
              description="Les contaminations: "
              key="beni"
            />
            <Marker
              coordinate={{ latitude: 33.544802, longitude: -7.626477 }}
              title="Casablanca-Settat"
              description="Les contaminations: "
              key="casa"
            />
            <Marker
              coordinate={{ latitude: 31.641033, longitude: -8.019529 }}
              title="Marrakech-Safi"
              description="Les contaminations: "
              key="marrakech"
            />
            <Marker
              coordinate={{ latitude: 31.931559, longitude: -4.435709 }}
              title="Drâa-Tafilalet"
              description="Les contaminations: "
              key="draa"
            />
            <Marker
              coordinate={{ latitude: 30.409958, longitude: -9.577061 }}
              title="Souss-Massa"
              description={"Les contaminations: " + 1}
              key="souss"
            />
            <Marker
              coordinate={{ latitude: 28.991467, longitude: -10.059765 }}
              title="Guelmim-Oued Noun"
              description={"Les contaminations: " + 1}
              key="guelmim"
            />
            <Marker
              coordinate={{ latitude: 27.136323, longitude: -13.189716 }}
              title="Laâyoune-Sakia El Hamra"
              description={"Les contaminations: " + 1}
              key="laayun"
            />
            <Marker
              coordinate={{ latitude: 23.684656, longitude: -15.956565 }}
              title="Dakhla-Oued Ed Dahab"
              description={"Les contaminations: " + 1}
              key="dakhla"
            />
          </MapView>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
