import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, Button } from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
import axios from "axios";

const Pdf = () => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleFilePicker = async () => {
    console.log('Seleccionar PDF...');
        let result = await ExpoDocumentPicker.getDocumentAsync({ copyToCacheDirectory: true});
        setPdfDoc(result.assets);
        console.log(result.assets);
        console.log('Resultado de ExpoDocumentPicker:', result);
        if (result.type === 'success') {
          setPdfDoc(result);
        } else {
          Alert.alert('Error', 'No se seleccionó ningún archivo');
        }
  }


  const handleUpload = async () => {
    console.log('Botón "Enviar" presionado');
    if (!pdfDoc || !question) {
      Alert.alert('Error', 'Faltan datos');
      return;
    }
    try {
      const data = new FormData();
      pdfDoc.forEach((file) => {
        data.append('file', {
          uri: file.uri,
          type: 'application/pdf',
          name: file.name
        });
      });
      
      data.append("question", question);

      console.log('Data a enviar:', data);

      const response = await axios.post('http://192.168.1.5:9004/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Respuesta del servidor:', response.data);

      if (response.status === 200) {
        setQuestion('');
        const { response: apiResponse, token } = response.data; // Asegúrate de que la API devuelva el número de tokens utilizados
        setResult(`${apiResponse} y los tokens utilizados fueron ${token}`);
      } else {
        console.log('Error en la respuesta:', response.statusText);
      }
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  }

  return (
    <View>
      <Button title={'Seleccionar PDF'} onPress={handleFilePicker}/>
      {pdfDoc && pdfDoc.map((asset, index) => (
        <Text key={index} style={styles.fileName}>{asset.name}</Text>
      ))}
      <TextInput style={styles.input} value={question} onChangeText={setQuestion}
                 placeholder={'Ingresa tu pregunta'}/>
      <Button title={'Enviar'} onPress={handleUpload}/>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  fileName: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Pdf;


/* import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, Button } from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
import axios from "axios";

const Pdf = () => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleFilePicker = async () => {
    console.log('Seleccionar PDF...');
        let result = await ExpoDocumentPicker.getDocumentAsync({ copyToCacheDirectory: true});
        setPdfDoc(result.assets);
        console.log(result.assets);
        console.log('Resultado de ExpoDocumentPicker:', result);
        if (result.type === 'success') {
          setPdfDoc(result);
        } else {
          Alert.alert('Error', 'No se seleccionó ningún archivo');
        }
  }


  const handleUpload = async () => {
    console.log('Botón "Enviar" presionado');
    if (!pdfDoc || !question) {
      Alert.alert('Error', 'Faltan datos');
      return;
    }
    try {
      const data = new FormData();
      pdfDoc.forEach((file) => {
        data.append('file', {
          uri: file.uri,
          type: 'application/pdf',
          name: file.name
        });
      });
      
      data.append("question", question);

      console.log('Data a enviar:', data);

      const response = await axios.post('http://192.168.1.5:9004/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Respuesta del servidor:', response.data);

      if (response.status === 200) {
        setQuestion('');
        setResult(response.data.response);
        //const jsonData = response.data;
        //setResult('${response.data.text} y los token utilizados fueron ,${jsonData.token}')
      } else {
        console.log('Error en la respuesta:', response.statusText);
      }
    } catch (error) {
      console.log('Error al enviar los datos:', error);
    }
  }

  return (
    <View>
      <Button title={'Seleccionar PDF'} onPress={handleFilePicker}/>
      {pdfDoc && pdfDoc.map((asset, index) => (
        <Text key={index} style={styles.fileName}>{asset.name}</Text>
      ))}
      <TextInput style={styles.input} value={question} onChangeText={setQuestion}
                 placeholder={'Ingresa tu pregunta'}/>
      <Button title={'Enviar'} onPress={handleUpload}/>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  fileName: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Pdf; 
*/