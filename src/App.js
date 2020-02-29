import React, { Component } from 'react';
import SearchComponent from './components/SearchComponents';
import ImageComponent from './components/ImageComponents';
import NextComponent from './components/NextComponents';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.getSearchKey = this.getSearchKey.bind(this);

    this.state = {imageList: []};
  }

  async getSearchKey(key) {
    const result = await axios.get("https://api.unsplash.com/search/photos/", {
      params: {
        client_id: 'JtJUuQU0jrjq8T7EtvP136HlR5ppvpvhqXM0f0_j_1A',
        query: key,
        per_page:15,
        page :1
      }
    });
    this.setState({imageList: result.data.results});
    const page_no = result.data.total_pages;
    console.log(result.data);
  }
  render() {
    return(
      <div>
        <SearchComponent sendKey={this.getSearchKey}/>

        {this.state.imageList.length > 0&&
          <ImageComponent imageList={this.state.imageList} page_no = {this.state.page}/>
        }

      </div>
    );
  }
}

export default App;
