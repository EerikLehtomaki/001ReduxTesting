import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB-QwnKfx3TulwyV9aQxI4TXw8weXiHxFU';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Create a new component. This component should produce
// some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take these components generated HTML and put
// it on the page
ReactDOM.render(<App />, document.querySelector('.container'));

