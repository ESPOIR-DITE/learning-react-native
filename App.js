import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

class LocationData {
    constructor(locationCode,locationName) {
        this.locationCode = locationCode;
        this.locationName = locationName;
    }
}
const data = [ LocationData = { locationCode :7441,locationName:["Milnerton","Tableview","Bothasig"]},LocationData = { locationCode :7500,locationName:["Glenlily","Churchill","Fairfield"]},LocationData = { locationCode :7460,locationName:["Townsend","Richmond","Vasco"]}]
export default function App() {
    const [location,setLocation] = useState("")
    const [inputCode, setInputCode] = useState("")

    const displayLocation = () => {
        setLocation("")
        for (const datum of data) {
            if(datum.locationCode === parseInt(inputCode)) setLocation(datum.locationName)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>learning</Text>
            <TextInput placeholder={'AREA SEARCH APP'} value={inputCode} onChangeText={setInputCode} style={styles.input}/>
            <View style={styles.searchBtnLayer}>
                <Text style={styles.searchBtn} onPress={displayLocation}>Search</Text>
            </View>
            <View style={styles.output}>
                <Text>{location}</Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
        flex: 1,
        backgroundColor: '#2a5cdb',
        alignItems: 'center',
        // justifyContent: "center",
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius: 15,
    },
    npmappTitle: {
        fontSize: 20,
        color: 'gray',
        marginTop: 70,
        marginBottom: 100,
    },
    searchBtn: {
        fontSize: 20
    },
    searchBtnLayer: {
        fontSize: 20,
        backgroundColor: '#5ba11a',
        margin: 15,
        padding: 10,
        borderRadius: 15,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    output: {
        width: 300,
        height: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 200
    }
});

