import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtQ2ps2E_et40xm0jsgbnZzLgemUGaYqQ';

// Create a new component. This component should  produce
// some HTML

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { video: []};

    YTSearch({key: API_KEY, term: 'surfboard'}, function(data) {
      this.setState = ({ video: data });
    });
  }

  render() {

    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}
// Take this component generated HTML and
// put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
