import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtQ2ps2E_et40xm0jsgbnZzLgemUGaYqQ';

// Create a new component. This component should  produce
// some HTML

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component generated HTML and
// put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
