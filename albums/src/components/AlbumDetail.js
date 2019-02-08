import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card'
import CardItem from './CardItem'
import Button from './Button'

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url} = album;
    return (
        <Card>
            <CardItem>
                <View style = {styles.thumbContainerStyles}>
                    <Image 
                        style = {styles.thumbnailStyle}
                        source={{ uri: thumbnail_image}}/>
                </View>
                <View style={styles.textContainerStyles}>
                    <Text style = {styles.titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image
                    style = {styles.imageStyle} 
                    source = {{uri: image}}/>
            </CardItem>
            <CardItem>
                <Button onPress={() => {
                    console.log('sending to amazon for ' + title);
                    Linking.openURL(url);
                    }}>

                    Buy Now - My Dude
                    
                </Button>
            </CardItem>
        </Card> 
    )
};

const styles = {
    textContainerStyles: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    thumbContainerStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    titleStyle: {
        fontSize: 18,

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;