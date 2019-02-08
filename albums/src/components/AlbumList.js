import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = {
        //initial empty state
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }
    
    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {
        //prints state whenever it is rerendered
        const { viewStyle } = styles;
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

const styles = {
    textStyle: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    viewStyle: {
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        position: 'relative'
    }
};

export default AlbumList;