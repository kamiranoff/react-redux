//Create a component and insert it to the DOM
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

import YTSEARCH from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCOpDLkaivqs39zxz35IMc9NLbW0ucXzsU';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    //youtube search
    this._searchOnYT('')
  }

  render() {
    const searchOnYTDebounced = _.debounce((term) => {this._searchOnYT(term)},500);
    return (
      <div>
        <SearchBar onSearchTermChange={term => searchOnYTDebounced(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}

        />
      </div>
    );
  }

  _searchOnYT(term) {
    YTSEARCH({key:API_KEY,term:term},(videos) =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]

      });
    });
  }
}


//<App /> --> React.createElement(App, null);
ReactDom.render(<App  />,document.querySelector(".container"));