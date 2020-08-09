import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchData={this.fetchData}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
    

    fetchData = (query = 'dolphins') => {
    const url1 = 'https://api.giphy.com/v1/gifs/search?q=';
    const url2 = '&api_key=dc6zaTOxFJmzC&rating=g&limit=3';
    const searchUrl = url1 + query + url2;
    console.log(searchUrl)
        fetch(searchUrl)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
    }
    componentDidMount() {
        this.fetchData()
    }
}

export default GifListContainer