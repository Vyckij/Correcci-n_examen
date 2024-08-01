import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const linkedIn = <Icon name={'Linkedin'} size={30} color={'black'}/>
//const spotify = <Icon name={'spotify'} size={30} color={'black'}/>
//const goodread= <Icon name={'reddit'} size={30} color={'black'}/>
//const github = <Icon name={'github'} size={30} color={'black'}/>
//const youtube = <Icon name={"heart"} size={30} color={'black'}/>
const Perfil = () => {
    const user = {
        //avatar: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-1…aSuh3EMBppPJtpv6P19B5ItGH6oa5NM57TkXw&oe=66D09099j",
        //avatartar:/Users/jessicavictoria/Downloads/Dispo_Prueba-main/frontend/app-ejemplo/imagenes/fot.gif,
        coverPhoto: "https://media.iatiseguros.com/wp-content/uploads/2023/05/07173551/que-hacer-seul-6.jpg",
        name: "Jessica Victoria"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={require('/Users/jessicavictoria/Downloads/Dispo_Prueba-main/frontend/app-ejemplo/imagenes/fot.gif')} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'black'}} onPress={() => {
                    Linking.openURL('https://www.linkedin.com/in/jessi-victoria-b1b5b4291/')
                }}>
                    {linkedIn}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default Perfil




/* <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://open.spotify.com/user/jessvyc')
                }}>
                    {spotify}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://goodreads.com/user/show/124823914-vyckij')
                }}>
                    {goodread}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://github.com/Vyckij')}>
                    {github}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCQhYA2KZlrREBnsxXfZxXpg')}>
                    {youtube}
                </TouchableWithoutFeedback>




                //<Image source={{uri: user.avatar}} style={styles.avatar}/>
*/