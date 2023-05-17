import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Mapa() {
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleShowMap = () => {
    setShowMap(true);
  };

  const handleHideMap = () => {
    setShowMap(false);
    setUserLocation({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      {showMap && (
        <MapView
          style={styles.map}
          region={userLocation}
          provider="google"
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
          customMapStyle={[]}
          showsMyLocationButton={true}
          showsCompass={true}
          showsScale={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          mapType="standard"
          followsUserLocation={true}
          userLocationAnnotationTitle="My Location"
          userLocationUpdateInterval={5000}
          userLocationFastestInterval={2000}
          userLocationForegroundMessage="My Location"
          onUserLocationChange={(event) => {
            console.log(event.nativeEvent.coordinate);
          }}
          onRegionChange={(region) => {
            console.log(region);
          }}
          onRegionChangeComplete={(region) => {
            console.log(region);
          }}
          onMapReady={() => {
            console.log('Map ready');
          }}
        >
          {userLocation && <Marker coordinate={userLocation} />}
        </MapView>
      )}
      {!showMap && (

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleShowMap} style={styles.botao}>
          <Text>MOSTRAR MAPA</Text>
          </TouchableOpacity>
        </View>
      )}
      {showMap && (
        <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={handleHideMap} style={styles.botao}>
          <Text>ESCONDER MAPA</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: "100%",
    height: "100%", 
   
  },
  botao: {
    backgroundColor: '#89DA85',
    borderRadius: 5,
    height: 50,
    flex: 1, 
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',

    
},
textoBotao: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
},

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});