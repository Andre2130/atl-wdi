import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
    console.log("Search by Title");
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94 ", {
      params: {
        api_key: 'd31f1a94'
      }

   }).then((response) => {
           const movieTitle = response.data.Title;
           this.setState({ movieTitle: movieTitle });
         })
         .catch((error) => {
           console.error("Error: ", error);
         })
  }

  _searchById = () => {
    console.log("Search by ID");
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94 ", {
      params: {
        api_key: 'd31f1a94'
      }

   }).then((response) => {
           const movieId = response.data.Title;
           this.setState({ movieId: movieId });
         })
         .catch((error) => {
           console.error("Error: ", error);
         })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie />
      </div>
    );
  }
}

export default App;
