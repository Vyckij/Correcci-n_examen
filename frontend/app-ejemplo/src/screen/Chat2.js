import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import axios from 'axios';


const Chat2 = () => {
    const [prompt, setPrompt] = useState('')
    const [result1, setResult1] = useState('')

const getResultFromOpenApi = async () => {
    try {
        const response1 = await axios.post('http://192.168.1.5:9004/openapiVocal', {
            prompt
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const jsonData = response1.data;
        setResult1(`${jsonData.result} y los token utilizados fueron ${jsonData.token}`);
    } catch (error) {
        console.error('Error al obtener resultados de la API:', error);
    }
};

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese la palabra para contar las vocales'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Enviar'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result1}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',

    }
})

export default Chat2