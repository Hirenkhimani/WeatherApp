import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { Fonts } from '../common/Fonts';

const forcastCity = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <MapView
          style={{ flex: 1, width: "100%" }}
          initialRegion={{
            latitude: props.route.params.item.item.coord.lat,
            longitude: props.route.params.item.item.coord.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: props.route.params.item.item.coord.lat,
              longitude: props.route.params.item.item.coord.lon,
            }}
          />
        </MapView>
      </View>
      <View style={{ flex: 2, margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.cityTxt}>{props.route.params.item.item.name}</Text>
          <Text style={styles.otherTxt}>{props.route.params.item.item.weather[0].main}</Text>
          <Text style={styles.otherTxt}>Humidity: {props.route.params.item.item.main.humidity}</Text>
          <Text style={styles.otherTxt}>Wind Speed: {props.route.params.item.item.wind.speed}</Text>
          <Text style={styles.otherTxt}>Max. Temp.: {(props.route.params.item.item.main.temp_max - 273.15).toFixed(0)}&deg;<Text style={styles.unitTxt1}>C</Text></Text>
          <Text style={styles.otherTxt}>Min. Temp.: {(props.route.params.item.item.main.temp_min - 273.15).toFixed(0)}&deg;<Text style={styles.unitTxt1}>C</Text></Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.tempTxt}>{(props.route.params.item.item.main.temp - 273.15).toFixed(0)}&deg;<Text style={styles.unitTxt2}>C</Text></Text>
          <Icon
            name="icloud"
            type="entypo"
            color={"#000"}
            size={50}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cityTxt: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 20,
    marginBottom: 10
  },
  otherTxt: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 16
  },
  tempTxt: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: 35,
    marginBottom: 10
  },
  unitTxt: {
    fontSize: 23
  },
  unitTxt1: {
    fontSize: 15
  },
  unitTxt2: {
    fontSize: 23
  }
});

export default forcastCity;