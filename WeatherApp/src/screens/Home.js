import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useStateValue } from '../services/state/State';
import { actions } from '../services/state/Reducer';
import Geolocation from '@react-native-community/geolocation';
import { getForcastCity } from '../services/api/ApiCalls';
import { Divider } from 'react-native-elements';
import Loader from '../components/Loader';
import { Fonts } from '../common/Fonts';

const Home = (props) => {

    const [state, dispatch] = useStateValue();
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const { forcast } = state;

    const getForcastCityServer = (lat, long) => {
        getForcastCity(lat, long).then((res) => {
            if (res && res.message) {
                setLoading(false);
                dispatch({ type: actions.SET_FORCAST, payload: res.list });
            }
        })
    };

    useEffect(() => {
        currentLocation();
    }, []);

    const currentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                getForcastCityServer(position.coords.latitude, position.coords.longitude);
            },
                (error) => alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
    }

    const ItemDivider = () => {
        return (
            <Divider style={{ backgroundColor: '#000' }} />
        )
    }

    const handelRefresh = () => {
        setRefresh(true);
        currentLocation();
        setRefresh(false);
    }

    const renderItems = (item) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('forcastCity', { item: item })}>
                <View style={styles.firstContainer}>
                    <View>
                        <Text style={styles.cityTxt}>{item.item.name}</Text>
                        <Text style={styles.otherTxt}>{item.item.weather[0].main}</Text>
                    </View>
                    <Text style={styles.tempTxt}>{(item.item.main.temp - 273.15).toFixed(0)}&deg;<Text style={styles.unitTxt}>C</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {loading ?
                <Loader />
                :
                <FlatList
                    data={forcast}
                    renderItem={renderItems}
                    style={styles.notesStyle}
                    ItemSeparatorComponent={ItemDivider}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refresh}
                    onRefresh={handelRefresh}
                />

            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstContainer: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 15, 
        marginBottom: 0, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    cityTxt: {
        fontFamily: Fonts.RobotoMedium, 
        fontSize: 18, 
        marginBottom: 10
    },
    otherTxt: {
        fontFamily: Fonts.RobotoRegular, 
        fontSize: 14
    },
    tempTxt: {
        fontFamily: Fonts.RobotoMedium, 
        fontSize: 35, 
        marginBottom: 10
    },
    unitTxt: {
        fontSize: 23,
    }
});

export default Home;